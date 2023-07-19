import { useContext } from "react";
import { watchListContext } from "../context/watchListContext";

export const useWatchListContext = () => {
    return useContext(watchListContext);
}