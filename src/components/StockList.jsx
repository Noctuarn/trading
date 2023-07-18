import React, { useState, useEffect } from "react";
import { fetchData } from "../api/fetchData";

const StockList = () => {
  const [stock, setStock] = useState();
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

  const getData = async () => {
    const responces = [];
    
    const response1 = await fetchData("GOOGL");
    const response2 = await fetchData("MSFT");
    const response3 = await fetchData("AMZN");
    
    responces.push(response1)
    responces.push(response2)
    responces.push(response3)
   

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
