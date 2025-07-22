import { useContext } from "react";
import { AuthContext } from "../components/Contexts/AuthContext";


export const useAuth = () => {
    return useContext(AuthContext);
}