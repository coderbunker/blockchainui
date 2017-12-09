import React from 'react';
import { Modal, Button, Media, Image } from 'react-bootstrap';

export default class PopUp extends React.Component {
  render() {
    return (
      <Modal show={this.props.showModal} onHide={this.props.close}>
        <Modal.Body>
          <Media>
            <Media.Left>
              <Image width={84} height={84} src={this.props.data.thumbnail_url} circle />
            </Media.Left>
            <Media.Body>
              <Media.Heading style={{marginTop: 15}}>{this.props.data.full_name}</Media.Heading> 
              <Media.Heading className="small-head">
                Coderbunker:
                {
                  this.props.data.organizations.Coderbunker.map((position, index) =>
                  index===0?
                  <span key={index}> {position}</span>:
                  <span key={index}>, {position}</span>
                )
                }
              </Media.Heading>
            </Media.Body>
          </Media>
          <div className="body-text">
            <h5>Skills</h5>
            {this.props.data.keywords.map((keyword, index) => 
                index===0?
                <span key={index}>{keyword}</span>:
                <span key={index}>, {keyword}</span>
            )}
          </div>
          <div className="body-text">
            <h5>Email</h5>
            <p>{this.props.data.email}</p>
          </div>
          <div className="body-text">
            <h5>Github</h5>
            <a href={"https://www.github.com/" + this.props.data.github}>{this.props.data.github}</a>
          </div>
          <div className="body-text">
            <h5>LinkedIn</h5>
            <a href={this.props.data.linkedin}>{this.props.data.linkedin}</a>
          </div>
          <div className="body-text">
            <h5>Phone</h5>
            <p>{this.props.data.mobile}</p>
          </div>
        </Modal.Body>
          <div style={{textAlign: 'right'}}>
            <Button style={{margin: 10}} onClick={this.props.close}>Close</Button>
          </div>
      </Modal>
    )
  }
}