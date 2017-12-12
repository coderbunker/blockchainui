import React from 'react';
import { Modal, Button, Media, Col } from 'react-bootstrap';

export default class PopUp extends React.Component {
  render() {
    console.log(this.props.data==="undefined"? "waiting": this.props.data)
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Body>
          <Media>
            <Media.Body>
              <Media.Heading className="text-center" style={{marginTop: 15}}>{this.props.data===undefined?'': this.props.data.name}</Media.Heading> 
              <Media.Heading className="small-head text-center">
                {this.props.data===undefined?'': 
                this.props.data['demand hours']===8? "Mentor": "Peer"}
              </Media.Heading>
              <Col md={6} xs={6}>
                <div className="text-center">
                  <h5 className="thin">Available Hours</h5>
                  <p>{this.props.data===undefined?'': this.props.data['spend hours']}</p>
                </div>
              </Col>
              <Col md={6} xs={6}>
                <div className="text-center">
                <h5 className="thin">Hourly Rate</h5>
                <p>{this.props.data===undefined?'': this.props.data['demand hours']}</p>
                </div>
              </Col>
            </Media.Body>
          </Media>
          
        </Modal.Body>
          <div style={{textAlign: 'right'}}>
            <Button style={{margin: 10, color: 'white', backgroundColor: '#5cb85c', borderRadius: 0}}>Ask for help</Button>
            <Button style={{margin: 10, borderRadius: 0}} onClick={this.props.close}>Close</Button>
          </div>
      </Modal>
    )
  }
}