import React from 'react';
import StockListItem from '../StockListItem/StockListItem';
import './StockList.css';


const StockList = (props) => {
  const stock = props.stockItems;
      return (
        <StockListItem 
                       symbol={ stock["01. symbol"] }
                       open={ stock["02. open"] }
                       high={ stock["03. high"] }
                       low={ stock["04. low"] } 
                       price={ stock["05. price"] } 
                       volume={ stock["06. volume"] } 
                       trend={ stock["07. latest trading day"] } 
                       prev={ stock["08. previous close"] } 
                       change={ stock["09. change"] } 
                       percent={ stock["10. change percent"] } 
                      />
      )
}

export default StockList;
