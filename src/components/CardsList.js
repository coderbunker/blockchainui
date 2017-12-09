import React from 'react';
import { Row, Col, Media, Image, Label, Well } from 'react-bootstrap';
import '../styles/cards.css';

export default class CardsList extends React.Component {

  render() {
    const AllCards = data.map((SingleCard, index) => 
      <Col md={4} sm={6} xs={12} key={index}>
        <div className="rounded-card">
          <Media>
            <Media.Left>
              <Image width={64} height={64} src={SingleCard.thumbnail_url} circle />
            </Media.Left>
            <Media.Body>
              <Media.Heading>{SingleCard.full_name}</Media.Heading>
              <div>
                <span className="bold">{SingleCard.hourly_rate}</span><span> {SingleCard.hourly_rate_currency + "/hr"}</span>
              </div>
              <p>
                {SingleCard.keywords.map((keyword, index) => 
                <Label bsStyle="success" className="skill-label" key={index}>{keyword}</Label>
              )}
              </p>
            </Media.Body>
          </Media>
        </div>
      </Col>
    )

    return (
      <div className="container card-container">
        <Row>
          {this.props.data===[]? <div>Loading …</div>: AllCards}
        </Row>
      </div>
    )
  }
}


const data = []

const dataObject = {
  "full_name": "Ricky Ng-Adam",
  "rates": [
    {"type": "consulting", "hourly": "700", "currency": "RMB"}
  ],
  "hourly_rate" : "700",
  "hourly_rate_currency": "RMB",
  "location": "31.190751,121.426261,15",
  "email": "rngadam@coderbunker.com",
  "linkedin": "https://www.linkedin.com/in/rngadam/",
  "mobile": ["+86-156-1894-3215"],
  "github": "rngadam",
  "organizations": { 
    "Coderbunker": ["Founder", "Lead"]
   },
  "thumbnail_url": "https://tse1-mm.cn.bing.net/th?id=OIP.rnG1ojcmwebKASg3fRu2rwEsEs&w=100&h=105&c=8&rs=1&qlt=90&pid=3.1&rm=2",
  "keywords": [ 
    "development", 
    "testing", 
    "architecture", 
    "design", 
    "R&D", 
    "engineering", 
    "team", 
    "recruitment",
    "Javascript", 
    "Python", 
    "C/C++", 
    "shell",
    "REST", 
    "Websockets", 
    "GraphQL", 
    "database", 
    "PostgreSQL", 
    "deployment", 
    "Linux", 
    "Ansible"
  ]
  }

  for (var i = 0; i < 30; i++ ){
    data.push(dataObject)
  }
