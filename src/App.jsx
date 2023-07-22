import React from "react";
import StockOverviewPage from "./pages/StockOverviewPage";
import StockDetailPage from "./pages/StockDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useWatchListContext from "./hooks/useWatchListContext.jsx";
import Navbar from "./components/Navbar";

import "./App.scss";


function App() {
  const { darkTheme } = useWatchListContext();

  const appStyles = {
    backgroundColor: darkTheme ? "#303845" : "#F4F5F7",
  };

  return (
    <div style={appStyles}>
      <BrowserRouter>
        <Navbar />
        <main className="container main">
          <Routes>
            <Route path="/" element={<StockOverviewPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
