import React from 'react';
import { DropdownButton, MenuItem} from 'react-bootstrap';

export default class DropdownButtons extends React.Component {
  constructor(props){
    super(props);

    this.changeActiveOne = this.changeActiveOne.bind(this)
    this.changeActiveTwo = this.changeActiveTwo.bind(this)
    this.state = {
      firstActiveIndex: 0,
      secondActiveIndex: 0
    }
  }

  changeActiveOne(index){
    this.setState({firstActiveIndex: index})
  }


  changeActiveTwo(index){
    this.setState({secondActiveIndex: index})
    console.log(this.state.secondActiveIndex)
  }

  render () {

    const PricesList = ["Lowest Rate First", "Highest Rate First"]

    return (
      <div>
        <DropdownButton title={PricesList[this.state.firstActiveIndex]} className="dropdown" id="bg-nested-dropdown">
          {PricesList.map((price, index) => 
            <MenuItem eventKey={index} key={index} onClick={() => this.changeActiveOne(index)}>
              {price}
            </MenuItem>
          )}
        </DropdownButton>
        <DropdownButton 
          title={this.props.skillsList[this.state.secondActiveIndex]} 
          className="dropdown" id="bg-nested-dropdown"
        >
          {this.props.skillsList.map((skill, index) => 
            <MenuItem eventKey={index} key={index} onClick={() => this.changeActiveTwo(index)}>{skill}</MenuItem>
          )}
        </DropdownButton>
      </div>
    )
  }
}