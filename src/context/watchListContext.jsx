import { createContext, useState } from "react";

export const watchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN", "AAPL"]);

  return (
    <watchListContext.Provider value={{ watchList }}>
      {children}
    </watchListContext.Provider>
  );
};
