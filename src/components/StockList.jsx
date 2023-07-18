import React, { useState, useEffect } from "react";
import { fetchData } from "../api/fetchData";

const StockList = () => {
  const [stock, setStock] = useState();
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

  const getData = async () => {
    const promises = watchList.map((symbol) => fetchData(symbol));
    const responces = await Promise.all(promises);
    console.log(responces);

    return responces;
  };

  useEffect(() => {
    let isMounted = true;

    if (isMounted) {
      setStock(getData());
    }

    return () => (isMounted = false);
  }, []);

  return <div>Stocklist</div>;
};

export default StockList;
