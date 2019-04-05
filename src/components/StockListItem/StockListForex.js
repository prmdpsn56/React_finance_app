import React from 'react';
import './StockListItem.css';

const StockListForex = (stock, props) => {
  return (
    <li className="StockListItem">
      <div className="StockListItem_Symbol"><span>From Currency Code: </span>{stock.symbol}</div>
      <div className="StockListItem_Price"><span>From Currency Name: </span>{stock.open}</div>
      <div className="StockListItem_Volume"><span>To Currency Code: </span>{ stock.high }</div>
      <div className="StockListItem_Time"><span>To Currency Name: </span>{ stock.low }</div>
      <div className="StockListItem_Volume"><span>Exchange Rate: </span>{ stock.price }</div>
      <div className="StockListItem_Time"><span>Last Refreshed: </span>{ stock.volume }</div>
      <div className="StockListItem_Volume"><span>Time Zone: </span>{ stock.trend }</div>
      
    </li>
  )
}
export default StockListForex;
