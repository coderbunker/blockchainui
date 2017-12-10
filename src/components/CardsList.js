import React from 'react';
import {createFilter} from 'react-search-input';
import { Row, Col, Media, Image, Label } from 'react-bootstrap';
import PopUp from './PopUp';
import PageLoad from './PageLoad';
import '../styles/cards.css';

const KEYS_TO_FILTERS = ['full_name', 'keywords', 'hourly_rate']

export default class CardsList extends React.Component {
  constructor(props){
    super(props);

    this.close = this.close.bind(this);
    this.open = this.open.bind(this);

    this.state = {
      showModal: false,
      activeItem: 0
    }
  }

  close() {
    this.setState({ showModal: false });
  }

  open(index) {
    this.setState({ showModal: true, activeItem: index});
    console.log("Clicked: " + index)
  }

  render() {
    const AllCards = this.props.data.
      filter(createFilter(this.props.searchTerm, KEYS_TO_FILTERS)).
      map((SingleCard, index) => 
      <Col md={6} sm={6} xs={12} key={index}>
        <div className="rounded-card" onClick={() => this.open(index)}>
          <Media>
            <Media.Left>
              <Image width={84} height={84} src={SingleCard.thumbnail_url} circle />
            </Media.Left>
            <Media.Body>
              <Media.Heading>{SingleCard.full_name}</Media.Heading>
              <Media.Heading className="small-head">
                Coderbunker:
                {
                  SingleCard.organizations.Coderbunker.map((position, index) =>
                  index===0?
                  <span key={index}> {position}</span>:
                  <span key={index}>, {position}</span>
                )
                }
              </Media.Heading>
              <div style={{marginTop: 10}}>
                <span className="bold">{SingleCard.hourly_rate}</span>
                <span> {SingleCard.hourly_rate_currency + " / hr"}</span>
              </div>
              <div className="clampMe" style={{marginTop: 10}}>
                {SingleCard.keywords.map((keyword, index) => 
                <Label bsStyle="success" className="skill-label" key={index}>
                  {keyword}
                </Label>
              )}
              </div>
            </Media.Body>
          </Media>
        </div>
      </Col>
    )

    return (
      <div className="container card-container">
        <Row>
          {this.props.data===[]? <div />: AllCards}
        </Row>

        {
          this.props.data.length===0? 
          <PageLoad />: 
          <PopUp
            showModal={this.state.showModal} 
            close={this.close}
            data={this.props.data[this.state.activeItem]}
          />
        }
      </div>
    )
  }
}