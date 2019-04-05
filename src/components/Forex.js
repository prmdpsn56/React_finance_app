import React, { Component } from 'react';
import _ from 'lodash';
import axios from 'axios';

import StockForex from './StockList/StockForex';

import '../App.css';

class Forex extends Component {
  constructor() {
    super();

    this.state = {
      stocks: [],
      term1: 'USD',
      term2: 'JPY',
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleClick(e) {
    e.preventDefault();
    let term1 = this.state.term1;
    let term2 = this.state.term2;
    const key = 'FZ81YTLOWRYZWQ1C';
    const url = `https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=${term1}&to_currency=${term2}&apikey=${key}`

    axios.get(url)
    .then(res => {  
      let result = res.data["Realtime Currency Exchange Rate"];
      if(result){
        this.setState({result: result, fetch: true});
      }
    })
    .catch(error => console.log(error))
  }

  render () {
    const value = this.state.value;

    if(this.state.fetch){
      return (
        
        <div className="App">
          <h1 className="App__Title">Forex Search</h1>
          <input type="text" name="term1" value={this.state.term1} onChange={this.handleChange} />
          <input type="text" name="term2" value={this.state.term2} onChange={this.handleChange} />
          <button onClick={this.handleClick} >Search</button>
         
          <StockForex stockItems={ this.state.result }/>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1 className="App__Title">Forex Search</h1>
          <input style = {{margin:10}} type="text" name="term1" value={this.state.term1} onChange={this.handleChange} />
          To
          <input  style = {{margin:10}} type="text" name="term2" value={this.state.term2} onChange={this.handleChange} />
          <button onClick={this.handleClick} >Search</button>
        </div>
        
      );
  }
    }


    
  }


export default Forex;
