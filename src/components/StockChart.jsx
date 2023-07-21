import React from "react";
import Chart from "react-apexcharts";

const StockChart = ({ chartData, symbol }) => {
  const { day, week, year } = chartData;
  const options = {
    title: {
      text: symbol,
      align: "center",
      style: {
        fontSize: "24px",
      },
    },
    chart: {
      id: "stock data",
      animation: {
        speed: 1300,
      },
    },

    xaxis: {
      type: "datatime",
    },
  };

  const series = [{
    name: symbol,
    data: day
  }]

  return <div style={{backgroundColor: "rgba(145, 158, 171, 0.04)"}} className="mt-5 p-4 shadow-sm bg-white">
    <Chart options={options} series={series} type="area" width="100%"/>
  </div>;
};

export default StockChart;
