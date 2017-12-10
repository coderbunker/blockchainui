import React from 'react';
import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import Filters from './Filters';
import '../styles/search.css';

export default class Search extends React.Component {
  render() {
    return (
      <div style={{backgroundColor: '#5cb85c'}}>
        <div className="container search-container">
        <h1 style={{color: '#fff', fontWeight: 200}}>Search for a Collaborator</h1>
          <FormGroup>
            <InputGroup>
              <FormControl type="text" onChange={this.props.updateFilter.bind(this)}/>
              <InputGroup.Addon style={{cursor: 'pointer'}}>
                <Glyphicon glyph="search" />
              </InputGroup.Addon>
            </InputGroup>
          </FormGroup>
          <Filters 
            data={this.props.data} 
            onChange={this.props.updateFilter} 
            lowSort={this.props.lowSort}
            highSort={this.props.highSort}
          />
        </div>
      </div>
    )
  }
}