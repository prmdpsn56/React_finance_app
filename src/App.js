import React, { Component } from 'react';
import Stock from './components/Stock';
import Forex from './components/Forex';
import Trends from './components/Trends';
import './App.css';

class App extends Component {
  state = {
    option: 1,
  }

  getTab = () => {
    switch(this.state.option){
      case 1:
        return <Stock />;
      case 2:
        return <Forex />;
      case 3:
        return <Trends />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>React Forex Application</h1>
          <button onClick={() => { this.setState({option: 1})} }>Stock</button>
          <button onClick={() => { this.setState({option: 2})} }>Forex</button>
          <button onClick={() => { this.setState({option: 3})} }>Trends</button>
          {this.getTab()}
      </div>
    );
  }
}

export default App;
