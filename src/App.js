import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import CardsList from './components/CardsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/robert1ridley/02e30445d1e437f2c0744dacce1329ea/raw/1e9c37c53b6407a13b59773016b8ab561eca9029/mockdata.json')
    .then((response) => {
      console.log(response)
      this.setState({data: response.data})
      console.log(typeof(this.state.data))
    });
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar data={this.state.data}/>
        <CardsList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
