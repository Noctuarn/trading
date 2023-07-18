import React from 'react'

import AutoComplete from "../components/AutoComplete.jsx"
import StockList from "../components/StockList.jsx"

const StockOverviewPage = () => {
  return (
    <div>
      Hello from Stock Overview
      <AutoComplete/>
      <StockList/>
    </div>
  )
}

export default StockOverviewPage
