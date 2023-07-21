import React from "react";

const Loading = () => {
  return (
    <div>
      <h1 className="loading text-center text-dark fw-bold mt-5">
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
