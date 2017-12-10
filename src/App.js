import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import SearchBar from './components/SearchBar';
import CardsList from './components/CardsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.lowSort = this.lowSort.bind(this);
    this.highSort = this.highSort.bind(this);
    this.state = {
      data: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/robert1ridley/02e30445d1e437f2c0744dacce1329ea/raw/8a25cdf46e6009ad1ecc13d1082d73475872bc22/mockdata.json')
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

  lowSort(){
    this.state.data.sort(function(a, b){
      if(Number(a.hourly_rate) < Number(b.hourly_rate)) return -1;
      if(Number(a.hourly_rate) > Number(b.hourly_rate)) return 1;
      return 0;
  })
  }

  highSort(){
    this.state.data.sort(function(a, b){
      if(Number(a.hourly_rate) > Number(b.hourly_rate)) return -1;
      if(Number(a.hourly_rate) < Number(b.hourly_rate)) return 1;
      return 0;
  })
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar data={this.state.data} 
          updateFilter={this.onChange}
          lowSort={this.lowSort}
          highSort={this.highSort}
        />
        <CardsList 
          data={this.state.data} 
          searchTerm={this.state.searchTerm}
        />
      </div>
    );
  }
}

export default App;
