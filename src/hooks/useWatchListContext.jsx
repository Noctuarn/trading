import { useContext } from "react";
import { watchListContext } from "../context/watchListContext";

const useWatchListContext = () => {
    return useContext(watchListContext);
}

export default useWatchListContext;