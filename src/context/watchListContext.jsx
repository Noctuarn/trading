import { createContext, useState, useEffect } from "react";

export const watchListContext = createContext();

export const WatchListProvider = ({ children }) => {
  const [watchList, setWatchList] = useState([
    "GOOGL",
    "MSFT",
    "AMZN",
    "AAPL"
  ]);

  const initialTheme = localStorage.getItem("darkTheme") === "true";
  const [darkTheme, setDarkTheme] = useState(initialTheme);

  const saveDarkThemeToLocalStorage = (value) => {
    localStorage.setItem("darkTheme", value.toString());
  };

  useEffect(() => {
    saveDarkThemeToLocalStorage(darkTheme);
  }, [darkTheme]);

  const themeToggler= () => {
    setDarkTheme(!darkTheme);
  }

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
    <watchListContext.Provider value={{ watchList, addStock, deleteStock, darkTheme, themeToggler}}>
      {children}
    </watchListContext.Provider>
  );
};
