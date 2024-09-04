import React, { useState } from "react";
import ItemComponent from "./ItemComponent";

interface ResultsProps {
  mfrs: {
    Make_ID: string;
    Make_Name: string;
  }[];
}

const Results: React.FC<ResultsProps> = ({ mfrs }) => {
  const [favoritedItems, setFavoritedItems] = useState<Set<string>>(new Set());

  const handleFavoriteToggle = (makeId: string) => {
    setFavoritedItems((prev) => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(makeId)) {
        newFavorites.delete(makeId);
      } else {
        newFavorites.add(makeId);
      }
      return newFavorites;
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-6 pb-36">
      {mfrs.map((mfr) => (
        <ItemComponent
          key={mfr.Make_ID}
          makeId={mfr.Make_ID}
          makeName={mfr.Make_Name}
          isFavorited={favoritedItems.has(mfr.Make_ID)}
          onFavoriteToggle={handleFavoriteToggle}
        />
      ))}
    </div>
  );
};

export default Results;
