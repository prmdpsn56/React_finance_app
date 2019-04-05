import React, { Component } from 'react';

import axios from 'axios';

import SearchBar from '../SearchBar/SearchBar';
import StockList from '../StockList/StockList';

class Weekly extends Component {
  constructor() {
    super();

    this.state = {
      stocks: [],
      term: null,
      value: ''
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleClick(e) {
    if(e) e.preventDefault();
    this.setState({
      value: '',
      term: this.state.value
    });

    let term = this.state.value;
    const key = 'FZ81YTLOWRYZWQ1C';
    const url = `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${term}&apikey=${key}`;


    axios.get(url)
    .then(res => {  
      let result = res.data["Global Quote"];
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
          <h1 className="App__Title">Weekly</h1>
          <SearchBar value={ value }
                     onChange={ this.handleChange }
                     onClick={ this.handleClick }/>
          <StockList stockItems={ this.state.result }/>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h1 className="App__Title">Weekly</h1>
          <SearchBar value={ value }
                     onChange={ this.handleChange }
                     onClick={ this.handleClick }/>
        </div>
        
      );
  }
    }


    
  }


export default Weekly;
