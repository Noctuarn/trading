import React from 'react'

import AutoComplete from "../components/AutoComplete.jsx"
import StockList from "../components/Stocklist.jsx"

const StockOverviewPage = () => {
  return (
    <div>
      <AutoComplete/>
      <StockList/>
    </div>
  )
}

export default StockOverviewPage
