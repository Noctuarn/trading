import React, { useState, useEffect } from "react";

import { fetchSearchData } from "../api/fetchData";
import useWatchListContext from "../hooks/useWatchListContext";

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const { addStock, darkTheme } = useWatchListContext();

  const inputTheme = {
    backgroundColor: "transparent",
    border: `3px solid ${darkTheme ? "white" : "black"}`,
    color: `${darkTheme ? "white" : "black"}`
  };

  useEffect(() => {
    let isMounted = true;

    const getSearchData = async () => {
      const data = await fetchSearchData(search);
      if (isMounted) setResult(data.result);
    };

    if (search.length > 0) {
      getSearchData();
    } else {
      setResult([]);
    }
    return () => (isMounted = false);
  }, [search]);

  return (
    <div className="w-50 p-5 rounded mx-auto">
      <div className="form-floating dropdown">
        <input
          onChange={(e) => setSearch(e.target.value)}
          className="input"
          autoComplete="off"
          type="text"
          placeholder="Search..."
          id="search"
          style={inputTheme}
        />

        <ul
          style={{ height: "300px", cursor: "pointer" }}
          className={`dropdown-menu overflow-y-scroll ${
            result.length > 0 && "show"
          } ${darkTheme ? "bg-dark" : "bg-light"}`}
        >
          {result.map((item, index) => {
            return (
              <li
                onClick={() => {
                  addStock(item.symbol);
                  setSearch("");
                }}
                style={{ color: `${darkTheme ? "white" : "black"}` }}
                className="dropdown-item"
                key={index}
              >
                {item.description} ({item.symbol})
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default AutoComplete;
