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
    <div className="flex gap-4" onClick={toggleTheme}>
      <button className="z-[1000] rounded-md">
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
      <h1 className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 lg:hidden dark:text-darkLight dark:hover:bg-dark dark:hover:text-darkBG dark:hidden">
        Dark mode
      </h1>
      <h1 className="hidden -mx-3 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 lg:hidden dark:text-darkLight dark:hover:bg-dark dark:hover:text-darkBG dark:block dark:lg:hidden">
        Light mode
      </h1>
    </div>
  );
};

export default ThemeSwitcher;
