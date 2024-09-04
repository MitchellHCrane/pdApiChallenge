import React, { useState } from "react";
import SearchComponent from "./SearchComponent";
import ResultsComponent from "./ResultsComponent";
import useMfr from "../hooks/useMfr";

const ChallengeComp = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { mfrs, loading, error, fetchMfrs, fetchRandomMfr } =
    useMfr(searchTerm);

  const handleSearch = () => {
    if (searchTerm) {
      fetchMfrs();
    }
  };

  const handleRandom = () => {
    setSearchTerm("");
    fetchRandomMfr();
  };

  return (
    <div className="bg-white dark:bg-pdDark h-full px-8">
      <div className="flex items-center justify-center pt-8 w-full">
        <h1 className="text-3xl text-pdBlue dark:text-pdLightGray font-bold">
          Search manufacturers
        </h1>
      </div>
      {/* Search Bar and Buttons  */}
      <SearchComponent
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleSearch={handleSearch}
        handleRandom={handleRandom}
      />
      {/* Loading Spinner  */}
      {loading && <div className="spinner"></div>}
      {/* Error Message  */}
      {error && <p className="text-pdRed mt-5 px-2">{error}</p>}

      <ResultsComponent mfrs={mfrs} />
    </div>
  );
};

export default ChallengeComp;
