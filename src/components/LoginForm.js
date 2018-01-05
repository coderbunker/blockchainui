import React from 'react';
import { Form, FormControl, FormGroup, Radio, Button, ControlLabel } from 'react-bootstrap';

import axios from 'axios';

import { host } from '../host.js';


export default class LoginForm extends React.Component {
  constructor(){
    super();
    // this.onChange = this.onChange.bind(this)
    this.state = {
      username: '',
      users: [],
      skills: [],
      selectedUser: '',
      selectedSkill: '',
      status: '',
    }
  }

  componentWillMount() {
    axios.get(`${host}/users`)
      .then(response => {
        this.setState({ users: response.data })
        console.log(this.state.users);
      });
    axios.get(`${host}/skills`)
      .then((response) => {
        this.setState({ skills: response.data })
        console.log(this.state.skills);
      });
  }
  
  // onChange = (e) => {
  //     this.setState({
  //       [e.target.name]: e.target.value
  //     })
  // }

  getSkill(e) {
    this.setState({ selectedSkill: e.target.value });
  }

  getUser(e) {
    this.setState({ selectedUser: e.target.value });
  }


  login(e) {
    e.preventDefault();
    console.log(this.state.selectedSkill, this.state.selectedUser);
    axios.post(`${host}/register/${this.state.selectedUser}/${this.state.selectedSkill}`)
      .then((response) => {
        window.localStorage.setItem('user', this.state.selectedUser);
        window.localStorage.setItem('skill', this.state.selectedSkill);
        window.location.href = "/";
      }).catch(e => this.setState({ status: "something's wrong" }))
  }


  render () {
    return (
      <Form 
      horizontal 
      onSubmit={(e) => this.login(e)}
    >
      <FormGroup controlId="formControlsSelectUser">
        <ControlLabel>Name</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={(e) => this.getUser(e)}>
          <option value="select">Select your name</option>
            {this.state.users.map(data => <option value={data} key={data}>{data}</option>)}
        </FormControl>
      </FormGroup>
      <FormGroup controlId="formControlsSelectSkill">
        <ControlLabel>Skill</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={(e) => this.getSkill(e)}>
          <option value="select">Select one skill</option>
            {this.state.skills.map(data => <option value={data.skill} key={data.skill}>{data.skill}</option>)}
        </FormControl>
      </FormGroup>
      {this.state.selectedSkill && this.state.selectedUser ? 
          <FormGroup>
            <Button className="green-button" type="submit">
              Login
        </Button>
        <div>{this.state.status}</div>
          </FormGroup> : null
      }
    </Form>
    )
  }
}