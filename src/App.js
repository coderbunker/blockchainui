import React, { Component } from 'react';
import './App.css';
import search from 'search';
import cards from 'cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <search/>
        <cards/>
      </div>
    );
  }
}

export default App;
