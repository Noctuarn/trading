import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { fetchHistoricalData } from "../api/fetchData";
import StockChart from "../components/StockChart";
import Loading from "../components/Loading";

const formatData = (data) => {
  return data.t.map((el, index) => {
    return {
      x: el * 1000,
      y: Math.floor(data.c[index])
    };
  });
};

const StockDetailPage = () => {
  const [chartData, setChartData] = useState();
  const {symbol} = useParams();

  useEffect(() => {
    const getData = async () => {
      const date = new Date();
      const currentDate = Math.floor(date.getTime() / 1000);
    
      let oneDay = currentDate - 24 * 60 * 60;
      let oneWeek = currentDate - 7 * 24 * 60 * 60;
      let oneYear = currentDate - 365 * 24 * 60 * 60;
    
      const responces = await Promise.all([
        fetchHistoricalData(symbol, "D", oneDay, currentDate), 
        fetchHistoricalData(symbol, "W", oneWeek, currentDate), 
        fetchHistoricalData(symbol, "M", oneYear, currentDate), 
      ]);
    
      setChartData({
        day: formatData(responces[0]),
        week: formatData(responces[1]),
        year: formatData(responces[2]),
      });
    };

    getData();
  }, [symbol]);

  return (
    <div>
      {chartData ? (
        <div>
          <StockChart chartData={chartData} symbol={symbol} />{" "}
        </div>
      ) : <Loading/>}
    </div>
  );
};

export default StockDetailPage;
