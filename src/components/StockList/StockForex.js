import React from 'react';
import StockListForex from '../StockListItem/StockListForex';
import './StockList.css';


const StockForex = (props) => {
  const stock = props.stockItems;
      return (
        <StockListForex 
                       symbol={ stock["1. From_Currency Code"] }
                       open={ stock["2. From_Currency Name"] }
                       high={ stock["3. To_Currency Code"] }
                       low={ stock["4. To_Currency Name"] } 
                       price={ stock["5. Exchange Rate"] } 
                       volume={ stock["6. Last Refreshed"] } 
                       trend={ stock["7. Time Zone"] } 
         
                      />
      )
}

export default StockForex;
