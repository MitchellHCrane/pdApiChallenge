import React from "react";

interface Props {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: () => void;
  handleRandom: () => void;
  mfrs: {
    Make_ID: string;
    Make_Name: string;
  }[];
}

const SearchComponent: React.FC<Props> = ({
  searchTerm,
  setSearchTerm,
  handleSearch,
  handleRandom,
  mfrs,
}) => {
  return (
    <div className="flex items-center justify-center flex-col md:flex-row gap-y-2 md:gap-x-2 mt-6 w-full">
      <div className="flex flex-col gap-y-2 md:flex-row mt-6 items-center w-full">
        <input
          className="border-2 w-full md:w-fit dark:bg-pdGray dark:text-white dark:border-pdDark border-pdBlue rounded-md px-2 py-1"
          type="text"
          placeholder="Search Manufacturers"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)} // Update search term
        />
        <button
          onClick={handleSearch}
          className="bg-pdLightBlue w-full md:w-fit hover:bg-pdLightBlue/70 text-white px-3 py-1.5 rounded-md md:ml-3"
        >
          Search
        </button>
        <button
          onClick={handleRandom}
          className="bg-pdMedical w-full md:w-fit hover:bg-pdMedical/70 text-white px-3 py-1.5 rounded-md md:ml-3"
        >
          Random Make
        </button>
      </div>
      <div className="text-nowrap dark:text-pdLightGray mt-6">
        {mfrs.length} {mfrs.length === 1 ? "result" : "results"}
      </div>
    </div>
  );
};

export default SearchComponent;
