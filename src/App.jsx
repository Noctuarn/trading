import React from "react";
import StockOverviewPage from "./pages/StockOverviewPage";
import StockDetailPage from "./pages/StockDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { WatchListProvider } from "./context/watchListContext";
import Navbar from "./components/Navbar";

import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter> 
        <Navbar />
        <main className="container main">
          <WatchListProvider>
            <Routes>
              <Route path="/" element={<StockOverviewPage />} />
              <Route path="/detail/:symbol" element={<StockDetailPage />} />
            </Routes>
          </WatchListProvider>
        </main>
      </BrowserRouter>
    </>
  );
}

export default App;