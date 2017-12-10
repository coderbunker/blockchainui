import React from 'react';
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

    // skillsList.findIndex(p => "All Skills" == skillsList.splice(0, 0, this.splice(p, 1)[0]))
    // var allInd = skillsList.findIndex(p => p == "All Skills")
    // console.log(allInd)
    skillsList.splice(skillsList.indexOf("All Skills"), 1);
    skillsList.unshift('All Skills');

    return (
      <div style={{textAlign: 'left'}}>
        <DropdownButtons 
          skillsList={skillsList}
          lowSort={this.props.lowSort}
          highSort={this.props.highSort}
          addSearchTerm={this.props.addSearchTerm}
        />
      </div>
    )
  }
}