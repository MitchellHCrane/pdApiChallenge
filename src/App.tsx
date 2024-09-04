import "./App.css";
import { useState } from "react";
import LightDarkTog from "./components/LightDarkTog";
import React from "react";
import ChallengeComp from "./components/ChallengeComp";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <main className={`${darkMode ? "dark" : ""}`}>
        <LightDarkTog darkMode={darkMode} setDarkMode={setDarkMode} />
        <ChallengeComp />
        <div className="dark:bg-pdDark bg-white h-[360px] lg:h-[880px]" />
      </main>
    </>
  );
}

export default App;
