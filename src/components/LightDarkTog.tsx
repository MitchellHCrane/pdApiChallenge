import React, { FC } from "react";

interface Props {
  darkMode: boolean;
  setDarkMode: (darkMode: boolean) => void;
}
const LightDarkTog: FC<Props> = ({ darkMode, setDarkMode }): JSX.Element => {
  return (
    <div className="flex items-center justify-end bg-pdGray dark:bg-pdGray">
      <div
        className={`relative w-[41px] my-2 mx-4 h-6 flex items-center rounded-full p-0 cursor-pointer transition-colors duration-300 ${
          darkMode ? "bg-pdDark" : "bg-white border border-pdLightGray"
        }`}
        onClick={() => setDarkMode(!darkMode)}
      >
        <div
          className={`bg-pdBlue hover:bg-pdBlue/70 dark:bg-pdLightBlue dark:hover:bg-pdLightBlue/70 w-5 h-5 rounded-full shadow-sm transform transition-transform duration-300 ${
            darkMode ? "translate-x-5" : "-translate-x-0"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default LightDarkTog;
