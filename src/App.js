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
    this.addSearchTerm = this.addSearchTerm.bind(this);
    this.state = {
      data: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/robert1ridley/02e30445d1e437f2c0744dacce1329ea/raw/a24a630604c94ace2a4dbd2b390141186f7f0a10/mockdata.json')
    .then((response) => {
      console.log(response)
      this.setState({data: response.data})
      console.log(typeof(this.state.data))
    });
  }

  onChange(event) {
    this.setState({searchTerm: event.target.value})
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

  addSearchTerm(text){
    text!=="All Skills"?
    this.setState({searchTerm: text}):
    this.setState({searchTerm: ''})
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar data={this.state.data} 
          updateFilter={this.onChange}
          lowSort={this.lowSort}
          highSort={this.highSort}
          addSearchTerm={this.addSearchTerm}
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
