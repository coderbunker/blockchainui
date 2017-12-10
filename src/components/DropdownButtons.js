import React from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';

export default class DropdownButtons extends React.Component {
  constructor(props){
    super(props);

    this.changeActiveOne = this.changeActiveOne.bind(this)
    this.changeActiveTwo = this.changeActiveTwo.bind(this)
    this.state = {
      activeIndex: 0,
      activeText: 'Rates'
    }
  }

  changeActiveOne(text){
    this.setState({activeText: text})
  }


  changeActiveTwo(index){
    this.setState({activeIndex: index})
  }

  render () {
    return (
      <div>
        <DropdownButton title={this.state.activeText} className="dropdown" id="bg-nested-dropdown">
            <MenuItem 
              eventKey={1}
              onClick={() => { this.changeActiveOne("Lowest Rates"); this.props.lowSort();}}
            >
              Lowest Rates
            </MenuItem>
            <MenuItem 
              eventKey={2}
              onClick={() => { this.changeActiveOne("Highest Rates"); this.props.highSort();}}
            >
              Highest Rates
            </MenuItem>
        </DropdownButton>
        <DropdownButton 
          title={this.props.skillsList[this.state.activeIndex]} 
          className="dropdown" id="bg-nested-dropdown"
        >
          {this.props.skillsList.map((skill, index) => 
            <MenuItem 
              eventKey={index+1} 
              key={index} 
              onClick={() => {this.changeActiveTwo(index); this.props.addSearchTerm(skill)}}>{skill}
            </MenuItem>
          )}
        </DropdownButton>
      </div>
    )
  }
}