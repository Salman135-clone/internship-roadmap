import React from "react";
import { useTheme } from "../context/ThemeContext";

const HookContext = () => {
  const { theme, toggleTheme } = useTheme();
  const themeClass =
    theme === "light" ? "bg-white text-black" : "bg-black text-white";
  return (
    <>
      <div className={`flex flex-col  gap-8 ${themeClass}`}>
        <h1>useContext Example</h1>
        <p className="text-lg">Current theme: {theme}</p>
        <button
          className={`${
            theme === "light"
              ? "bg-white border-2 border-black text-black"
              : "bg-black text-white"
          }`}
          onClick={toggleTheme}
        >
          Toggle theme
        </button>
      </div>
    </>
  );
};

export default HookContext;
