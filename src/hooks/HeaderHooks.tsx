import { useContext } from "react";
import HeaderContext from "../components/Header/HeaderContext";

export const useHeader = () => useContext(HeaderContext);
