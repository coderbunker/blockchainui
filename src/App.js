import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import CardsList from './components/CardsList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Search />
        <CardsList />
      </div>
    );
  }
}

export default App;
