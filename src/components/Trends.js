import React, { Component } from 'react';
import Daily from './Trends/Daily';
import Monthly from './Trends/Monthly';
import Weekly from './Trends/Weekly';


class Trends extends Component {
  state = {
    option: 1,
  }

  getTab = () => {
    switch(this.state.option){
      case 1:
        return <Daily />;
      case 2:
        return <Monthly />;
      case 3:
        return <Weekly />;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Search Trends</h1>
          <button onClick={() => { this.setState({option: 1})} }>Daily</button>
          <button onClick={() => { this.setState({option: 2})} }>Monthly</button>
          <button onClick={() => { this.setState({option: 3})} }>Weekly</button>
          {this.getTab()}
      </div>
    );
  }
}

export default Trends;
