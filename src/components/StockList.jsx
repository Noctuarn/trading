import React, { useState, useEffect } from "react";
import { fetchData } from "../api/fetchData";

import {BsFillCaretDownFill} from "react-icons/bs"
import {BsFillCaretUpFill} from "react-icons/bs"

const StockList = () => {
  const [stock, setStock] = useState([]);
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

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
  }, []);

  const changeColor = (value) => {
    return value > 0 ? "text-success": "text-danger"
  }

  const changeIcon = (value) => {
    return value > 0 ? <BsFillCaretUpFill/> : <BsFillCaretDownFill/>
  }


  return (
    <table className="table hover mt-5">
      <thead style={{ color: "rgb(79,89,102)" }}>
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
            <tr key={index} className="table-row">
              <th scope="row">{index+1}</th>
              <td>{item.name}</td>
              <td>{item.data.c}</td>
              <td className={changeColor(item.data.d)}>{item.data.d}{changeIcon(item.data.d)}</td>
              <td className={changeColor(item.data.dp)}>{item.data.dp}{changeIcon(item.data.dp)}</td>
              <td>{item.data.h}</td>
              <td>{item.data.l}</td>
              <td>{item.data.o}</td>
              <td>{item.data.pc}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default StockList;
