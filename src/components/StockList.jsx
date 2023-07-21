import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { fetchData } from "../api/fetchData";

import useWatchListContext from "../hooks/useWatchListContext.jsx";

import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";

const StockList = () => {
  const [stock, setStock] = useState([]);

  const { watchList, deleteStock } = useWatchListContext();

  const navigate = useNavigate();

  const getData = async () => {
    const promises = watchList.map(async (symbol) => {
      const data = await fetchData(symbol);
      return {
        data: data,
        name: symbol,
      };
    });

    const responses = await Promise.all(promises);
    return responses;
  };

  useEffect(() => {
    let isMounted = true;

    const fetchDataAndSetState = async () => {
      if (isMounted) {
        const data = await getData();
        setStock(data);
      }
    };

    fetchDataAndSetState();

    return () => {
      isMounted = false;
    };
  }, [watchList]);

  const changeColor = (value) => {
    return value > 0 ? "text-success" : "text-danger";
  };

  const changeIcon = (value) => {
    return value > 0 ? <BsFillCaretUpFill /> : <BsFillCaretDownFill />;
  };

  const handleStockSelect = (symbol) => {
    navigate(`/detail/${symbol}`);
  };

  return (
    <table className="table table-hover table-bordered mt-5">
      <thead className="table-dark" style={{ color: "rgb(79,89,102)" }}>
        <tr>
          <th scope="col">№</th>
          <th scope="col">Name</th>
          <th scope="col">Last</th>
          <th scope="col">Chg</th>
          <th scope="col">Chg%</th>
          <th scope="col">High</th>
          <th scope="col">Low</th>
          <th scope="col">Open</th>
          <th scope="col">Pclose</th>
        </tr>
      </thead>
      <tbody>
        {stock.map((item, index) => {
          return (
            <tr
              onClick={() => handleStockSelect(item.name)}
              key={index}
              className="table-row"
              style={{ cursor: "pointer" }}
            >
              <th scope="row">{index + 1}</th>
              <td>{item.name}</td>
              <td>{item.data.c}</td>
              <td className={changeColor(item.data.d)}>
                {item.data.d}
                {changeIcon(item.data.d)}
              </td>
              <td className={changeColor(item.data.dp)}>
                {item.data.dp}
                {changeIcon(item.data.dp)}
              </td>
              <td>{item.data.h}</td>
              <td>{item.data.l}</td>
              <td>{item.data.o}</td>
              <td className="d-flex justify-content-between">
                {item.data.pc}{" "}
                <button
                  onClick={(event) => {
                    event.stopPropagation();
                    deleteStock(item.name);
                  }}
                  className="btn btn-danger bt-small btn-delete"
                >
                  Remove
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StockList;
