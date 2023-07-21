import React, { useState } from "react";
import Chart from "react-apexcharts";

const StockChart = ({ chartData, symbol }) => {
  const { day, week, year } = chartData;
  const [dateFormat, setDateFormat] = useState("24h");

  const determineTimeFromat = () => {
    switch (dateFormat) {
      case "24h":
        return day;
      case "7d":
        return week;
      case "1y":
        return year;
      default:
        return day;
    }
  };

  const selectButtons = (button) => {
    const classes = "btn btn-md ";

    if(button === dateFormat){
      return classes + "btn-primary";
    } else {
      return classes + "btn-outline-primary";
    }
  }

  const options = {
   color: ["red"],
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
      type: "datetime",
      labels: {
        datatimeUTC: false,
      },
    },

    tooltip: {
      x: {
        format: "MMM dd HH:MM",
      },
    },
  };

  const series = [
    {
      name: symbol,
      data: determineTimeFromat(),
    },
  ];

  return (
    <div
      style={{ backgroundColor: "rgba(145, 158, 171, 0.04)" }}
      className="mt-5 p-4 shadow-sm bg-white"
    >
      <Chart options={options} series={series} type="area" width="100%" />

      <div className="d-flex gap-2 mt-3">
        <button className = {selectButtons("24h")}
          onClick={() => {
            setDateFormat("24h");
          }}
        >
          24h
        </button>
        <button className = {selectButtons("7d")}
          onClick={() => {
            setDateFormat("7d");
          }}
        >
          7d
        </button>
        <button className = {selectButtons("1y")}
          onClick={() => {
            setDateFormat("1y");
          }}
        >
          6y
        </button>
      </div>
    </div>
  );
};

export default StockChart;
