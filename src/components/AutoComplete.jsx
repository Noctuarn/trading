import React, { useState, useEffect } from "react";

import { fetchSearchData } from "../api/fetchData";
import useWatchListContext from "../hooks/useWatchListContext";

const AutoComplete = () => {
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const { addStock, deleteStock } = useWatchListContext();

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
          className="form-control"
          placeholder="search"
          value={search}
          type="text"
          id="search"
          autoComplete="off"
          style={{ backgroundColor: "rgba(145, 158, 171, 0.04)" }}
        />
        <label htmlFor="search">Search</label>
        <ul
          style={{ height: "300px", cursor: "pointer" }}
          className={`dropdown-menu overflow-y-scroll ${
            result.length > 0 && "show"
          }`}
        >
          {result.map((item, index) => {
            return (
              <li
                onClick={() => {
                  addStock(item.symbol);
                  setSearch("");
                }}
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
