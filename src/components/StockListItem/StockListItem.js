import React from 'react';
import './StockListItem.css';

const StockListItem = (stock, props) => {
console.log(props)
  return (
    <li className="StockListItem">
      <div className="StockListItem_Symbol"><span>Stock: </span>{stock.symbol}</div>
      <div className="StockListItem_Price"><span>Price: </span>${ parseInt(stock.price).toFixed(2) }</div>
      <div className="StockListItem_Volume"><span>Open: </span>{ stock.open }</div>
      <div className="StockListItem_Time"><span>High: </span>{ stock.high }</div>
      <div className="StockListItem_Volume"><span>Low: </span>{ stock.low }</div>
      <div className="StockListItem_Time"><span>Latest Trending Day: </span>{ stock.trend }</div>
      <div className="StockListItem_Volume"><span>Volume: </span>{ stock.volume }</div>
      <div className="StockListItem_Time"><span>Previous Close: </span>{ stock.prev }</div>
      <div className="StockListItem_Volume"><span>Change: </span>{ stock.change }</div>
      <div className="StockListItem_Time"><span>Change Percent: </span>{ stock.percent }</div>
    </li>
  )
}
export default StockListItem;
