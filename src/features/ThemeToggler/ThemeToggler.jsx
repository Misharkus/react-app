import { THEME_STORAGE } from "../../constants";
import { useTheme } from "../../hooks/useTheme";
import cls from "./ThemeToggler.module.css";

export const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();

  const onChangeThemeHandler = (e) => {
    const updatedTheme = e.target.checked === false ? "dark" : "light";
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
