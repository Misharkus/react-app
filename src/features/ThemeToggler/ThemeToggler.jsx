import { useEffect } from "react";
import { THEME_STORAGE } from "../../constants";
import { useTheme } from "../../hooks/useTheme";
import cls from "./ThemeToggler.module.css";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.body.classList.toggle("darkLayout", theme === "dark");
  }, [theme]);

  const onChangeThemeHandler = (e) => {
    const isChecked = e.target.checked;
    const updatedTheme = isChecked ? "light" : "dark";

    setTheme(updatedTheme);
    localStorage.setItem(THEME_STORAGE, updatedTheme);
  };
  return (
    <label className={cls.switch}>
      <input
        type="checkbox"
        onChange={onChangeThemeHandler}
        checked={theme === "light"}
      />
      <span className={cls.slider}></span>
    </label>
  );
};
