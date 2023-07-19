import { useState } from "react";
import StockOverviewPage from "./pages/StockOverviewPage";
import StockDetailPage from "./pages/StockDetailPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { WatchListProvider } from "./context/watchListContext";
import "./App.scss";

function App() {
  return (
    <main className="container">
      <WatchListProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StockOverviewPage />} />
            <Route path="/detail/:symbol" element={<StockDetailPage />} />
          </Routes>
        </BrowserRouter>
      </WatchListProvider>
    </main>
  );
}

export default App;
