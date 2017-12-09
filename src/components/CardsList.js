import React from 'react';
import axios from 'axios';
import { Row, Col } from 'react-bootstrap';

export default class CardsList extends React.Component {

  render() {
    const AllCards = this.props.data.map((single))
    return (
      <Row>
        {AllCards}
      </Row>
    )
  }
}
