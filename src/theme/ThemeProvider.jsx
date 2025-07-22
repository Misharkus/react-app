import { useLayoutEffect, useState } from "react";
import { ThemeContext } from "../components/Contexts/ThemeContext";
import { THEME_STORAGE } from "../constants";

export const ThemeProvider = ({ children }) => {
  const savedTheme = localStorage.getItem(THEME_STORAGE) || "dark";
  const [theme, setTheme] = useState(savedTheme);

  useLayoutEffect(() => {
    const detectTheme = () => {
      const isDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

      if (isDark) {
        setTheme("dark");
        document.body.classList.remove("darkLayout");
      } else {
        savedTheme === "dark" && document.body.classList.add("darkLayout");
        setTheme(savedTheme);
      }
    };
    detectTheme();

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    mediaQuery.addEventListener("change", detectTheme);
    return () => {
      mediaQuery.removeEventListener("change", detectTheme);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
