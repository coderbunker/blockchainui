import React from 'react';
import { Form, FormControl, FormGroup, Radio, Button } from 'react-bootstrap';

export default class LoginForm extends React.Component {
  constructor(){
    super();
    this.onChange = this.onChange.bind(this)
    this.state = {
      username: ''
    }
  }
  
  onChange = (e) => {
      this.setState({
        [e.target.name]: e.target.value
      })
  }
  render () {
    return (
      <Form 
      horizontal 
      method="post" 
      action={"http://localhost:7000/api/v1/login/"+this.state.username}
    >
      <FormGroup controlId="formHorizontalEmail">
        <FormControl 
          type="name" 
          name="username" 
          placeholder="Username" 
          onChange={e => this.onChange(e)} 
          value={this.state.username}
        />
      </FormGroup>    
      <FormGroup controlId="formHorizontalPassword">
        <FormControl 
          type="password" 
          name="password" 
          placeholder="Password" 
          onChange={e => this.onChange(e)} 
          value={this.state.password}/>
      </FormGroup>
      <FormGroup>
        <Button className="green-button" type="submit">
          Submit
        </Button>
      </FormGroup>
    </Form>
    )
  }
}