import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import CardsList from './components/CardsList';
import Search from './components/SearchBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.state = {
      data: [],
      searchTerm: ''
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

  onChange(event) {
    this.setState({searchTerm: event.target.value})
    console.log("Search:" + this.state.searchTerm)
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar data={this.state.data} updateFilter={this.onChange}/>
        <CardsList data={this.state.data} searchTerm={this.state.searchTerm}/>
      </div>
    );
  }
}

export default App;
