import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import SearchBar from '../components/SearchBar';
import CardsList from '../components/CardsList';

class Skills extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.addSearchTerm = this.addSearchTerm.bind(this);
    this.state = {
      data: [],
      searchTerm: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:7000/api/v1/skills')
    .then((response) => {
      console.log(response)
      this.setState({data: response.data.skills})
      console.log(this.state.data)
    });
  }

  onChange(event) {
    this.setState({searchTerm: event.target.value})
  }

  addSearchTerm(text){
    text!=="Role"?
    this.setState({searchTerm: text}):
    this.setState({searchTerm: ''})
  }

  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <SearchBar data={this.state.data} 
          updateFilter={this.onChange}
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

export default Skills;
