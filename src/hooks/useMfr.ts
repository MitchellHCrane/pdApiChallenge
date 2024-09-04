import { useState } from "react";
import axios from "axios";
import React from "react";

interface Mfr {
  Make_ID: string;
  Make_Name: string;
}

const useMfrs = (searchTerm: string) => {
  const [mfrs, setMfrs] = useState<Mfr[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  // In-memory cache
  const cache = React.useRef<{ [key: string]: Mfr[] }>({});

  // Get list of manufacturers
  const fetchMfrs = async () => {
    setMfrs([]); // Clear current results
    setLoading(true); // Set loading
    setError(""); // Clear error if any

    // in-memory cache to store the fetched data. This method stores the data in a variable so that subsequent requests for the same data don’t hit the API again.
    const cacheKey = searchTerm.trim().toLowerCase();
    if (cache.current[cacheKey]) {
      setMfrs(cache.current[cacheKey]);
      setLoading(false);
      return;
    }

    // Api Call to get manufacturers id/name
    try {
      const response = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=csv`
      );
      const csvData = response.data;
      const parsedData = parseCSV(csvData);

      if (searchTerm) {
        const filteredMfrs = parsedData.filter((mfr) => {
          const makeName = mfr.Make_Name || ""; // Default to empty string if undefined
          return makeName.toLowerCase().includes(searchTerm.toLowerCase()); // Case-insensitive search
        });

        if (filteredMfrs.length > 0) {
          cache.current[cacheKey] = filteredMfrs; // Cache the result
          setMfrs(filteredMfrs);
        } else {
          setMfrs([]);
          setError("No results found."); // Set error message when no results
        }
      } else {
        setMfrs(parsedData);
        setError(""); // Clear error when no search term is provided
      }
    } catch (error) {
      setError("Error fetching manufacturer data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };
  // Get a random manufacturer
  const fetchRandomMfr = async () => {
    setMfrs([]); // Clear current results
    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        `https://vpic.nhtsa.dot.gov/api/vehicles/GetAllMakes?format=csv`
      );
      const csvData = response.data;
      const parsedData = parseCSV(csvData);

      if (parsedData.length > 0) {
        const randomMfr =
          parsedData[Math.floor(Math.random() * parsedData.length)];
        setMfrs([randomMfr]);
      } else {
        setError("No manufacturers available.");
      }
    } catch (error) {
      setError("Error fetching manufacturer data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // Function to parse the CSV data
  const parseCSV = (csvData: string): Mfr[] => {
    const rows = csvData.split("\n").slice(1); // Skip the header/first row
    return rows.map((row) => {
      const [Make_ID, Make_Name] = row.split(",");
      return { Make_ID, Make_Name };
    });
  };

  return { mfrs, loading, error, fetchMfrs, fetchRandomMfr };
};

export default useMfrs;
