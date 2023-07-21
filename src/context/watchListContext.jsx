import { createContext, useState } from "react";

export const watchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([
    "GOOGL",
    "MSFT",
    "AMZN",
    "AAPL"
  ]);

  const addStock = (stock) => {
    if(watchList.indexOf(stock < 0)){
    setWatchList([...watchList, stock]);
    }
  };

  const deleteStock = (stock) => {
    const updateList = watchList.filter((el) => {
      return el !== stock;
    });

    setWatchList(updateList);
  };

  return (
    <watchListContext.Provider value={{ watchList, addStock, deleteStock }}>
      {children}
    </watchListContext.Provider>
  );
};
