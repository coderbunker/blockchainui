import React, { Component } from 'react';
import './App.css';
import Search from './components/Search';
import CardsList from './components/CardsList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    axios.get('https://gist.githubusercontent.com/rngadam/2ad49e41cb7abfef7d672b4dcc0b26df/raw/00ec1e7a00b43b40cd7e569a387163ed4a7da6de/example.json')
    .then((response) => { 
      this.setState({data: response.data})
      console.log(response.data)
    });
  }
  render() {
    return (
      <div className="App">
        <Search data={this.state.data}/>
        <CardsList data={this.state.data}/>
      </div>
    );
  }
}

export default App;
