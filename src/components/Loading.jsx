import React from "react";

import wait from "../assets/wait.gif"
import useWatchListContext from "../hooks/useWatchListContext";

const Loading = () => {

  const { darkTheme } = useWatchListContext();

  const loadingStyle = {
    color: `${darkTheme ? "white" : "black"}`
  }

  return (
    <div className="d-flex justify-content-center gap-1 py-4 flex-column">
      <img style={{width: "450px", height: "auto", margin: "0 auto"}} src={wait} alt="" autoPlay />
      <h1 style={loadingStyle} className="loading text-center fw-bold mt-5">
        Loading
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
        <span className="loading-dot">.</span>
      </h1>
    </div>
  );
};

export default Loading;
