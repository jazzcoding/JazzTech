import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
      ? "dark"
      : "light"
  );

  // Effect to update the theme when the component mounts
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.theme = theme;
  }, [theme]);

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button onClick={toggleTheme} className="z-[1000] rounded-md">
      {theme === "light" ? (
        <SunIcon
          className="h-6 w-6 text-darkBG group-hover:text-indigo-600"
          aria-hidden="true"
        />
      ) : (
        <MoonIcon
          className="h-[1.25rem] w-[1.25rem] text-lightBG group-hover:text-indigo-600"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
