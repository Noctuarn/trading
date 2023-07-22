import React, { useState } from "react";
import Chart from "react-apexcharts";

import useWatchListContext from "../hooks/useWatchListContext";

const StockChart = ({ chartData, symbol }) => {
  const { day, week, year } = chartData;
  const [dateFormat, setDateFormat] = useState("24h");

  const {darkTheme} = useWatchListContext();

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

    if (button === dateFormat) {
      return classes + "btn-primary";
    } else {
      return classes + "btn-outline-primary";
    }
  };

  const options = {
    
    title: {
      text: symbol,
      align: "center",
      style: {
        fontSize: "24px",
        color: darkTheme ?  "white" : "black"
      },
    },
    chart: {
      id: "stock data",
      animation: {
        speed: 1300,
      },
      background: darkTheme ?  "#252a34" : "white"
    },

    xaxis: {
      type: "datetime",
      labels: {
        datetimeUTC: false,
        style: {
          colors: darkTheme ?  "white" : "black",
          fontWeight: "bold"
        }
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: darkTheme ?  "white" : "black",
          fontWeight: "bold"
        }
      },
    },

    tooltip: {
      x: {
        format: "MMM DD HH:MM",
      }
    },

    theme: {
      monochrome: {
        enabled: false,
        color: '#114b9d',
        shadeTo: 'light',
        shadeIntensity: 0.9
      }
    },

    grid: {
     
    }
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
        <button
          className={selectButtons("24h")}
          onClick={() => {
            setDateFormat("24h");
          }}
        >
          9 days
        </button>
        <button
          className={selectButtons("7d")}
          onClick={() => {
            setDateFormat("7d");
          }}
        >
          2 months
        </button>
        <button
          className={selectButtons("1y")}
          onClick={() => {
            setDateFormat("1y");
          }}
        >
          6 years
        </button>
      </div>
    </div>
  );
};

export default StockChart;
