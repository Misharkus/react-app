import { useState } from "react";
import { ThemeContext } from "../components/Contexts/ThemeContext";
import { THEME_STORAGE } from "../constants";

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem(THEME_STORAGE) || "dark";
  const [theme, setTheme] = useState(savedTheme);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
