import React from 'react';
import { Button, DropdownButton, MenuItem, Dropdown } from 'react-bootstrap';
import DropdownButtons from './DropdownButtons';
import '../styles/filters.css';

export default class Filters extends React.Component {
  render () {
    const skillsList = ["All Skills"]
    if(this.props.data){
      this.props.data.map(item =>
        item.keywords.map(keyword => 
          skillsList.includes(keyword)?skillsList :skillsList.push(keyword)
        )
      )
    }
    skillsList.sort(function(a, b){
      if(a.toLowerCase() < b.toLowerCase()) return -1;
      if(a.toLowerCase() > b.toLowerCase()) return 1;
      return 0;
  })
    return (
      <div style={{textAlign: 'left'}}>
        <DropdownButtons 
          skillsList={skillsList}
          lowSort={this.props.lowSort}
          highSort={this.props.highSort}
        />
      </div>
    )
  }
}