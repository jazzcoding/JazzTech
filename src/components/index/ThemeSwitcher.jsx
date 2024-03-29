import React, { useState, useEffect } from "react";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
const ThemeSwitcher = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const isDarkMode =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDarkMode);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("darkMode", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  // Whenever the user explicitly chooses light mode
  localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  localStorage.removeItem("theme");
  return (
    <button onClick={toggleDarkMode} className="z-[1000] rounded-md text-black">
      {darkMode ? (
        <MoonIcon
          className="h-6 w-6 text-lightBG group-hover:text-indigo-600"
          aria-hidden="true"
        />
      ) : (
        <SunIcon
          className="h-6 w-6 text-dark group-hover:text-indigo-600"
          aria-hidden="true"
        />
      )}
    </button>
  );
};

export default ThemeSwitcher;
