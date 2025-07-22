import { useContext } from "react";
import { ThemeContext } from "../components/Contexts/ThemeContext";


export const useTheme = () => {
    return useContext(ThemeContext);
}