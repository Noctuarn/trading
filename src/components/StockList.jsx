import React, {useState} from 'react'


const StockList = () => {

  const [watchList, setWatchList] = useState(["GOOGLE", "MSFT", "AMZ"]);

  return (
    <div>
        Stocklist
    </div>
  )
}

export default StockList
