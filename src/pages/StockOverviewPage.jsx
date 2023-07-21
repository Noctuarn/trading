import React from 'react'

import AutoComplete from "../components/AutoComplete.jsx"
import StockList from "../components/Stocklist.jsx"
import Logo from '../components/Logo.jsx'

const StockOverviewPage = () => {
  return (
    <div>
      <Logo/>
      <AutoComplete/>
      <StockList/>
    </div>
  )
}

export default StockOverviewPage
