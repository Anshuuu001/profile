/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "dark";
  });

  // Apply theme
  useEffect(() => {
    localStorage.setItem("theme", theme);

    const root = document.documentElement;

    // remove old themes
    root.classList.remove("dark", "light", "cyberpunk", "anime", "minimal");

    // apply new theme
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook (recommended way to use context)
export const useTheme = () => useContext(ThemeContext);