import React, { Component } from 'react';
import { Profile_Rupert_Timeline as Timeline } from "./Profile_Rupert_Timeline";
import { Row, Col, Card, Jumbotron, Container } from 'react-bootstrap';
import Fab from '@material-ui/core/Fab';

import { getIconFromSVGContext as GetIcon } from "./BaseJSX";


interface IProfile_Rupert {

}

interface IProfile_Rupert_State {

}

export class Profile_Rupert extends Component<IProfile_Rupert, IProfile_Rupert_State> {

  CV() {
    return (
      <Card>
        <Card.Header>Resume</Card.Header>
        <Card.Body>
          <Timeline />
        </Card.Body>
      </Card>
    );
  }

  resume() {
    return (
      <Card>
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
    </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    );
  }

  follow() {
    return (
      <Container className="mt-3">
        <Row>
          <Col xs={12} md={4}>
            <Fab size="medium" color="secondary" aria-label="add">
              {GetIcon(15)}
            </Fab>
          </Col>
          <Col xs={12} md={4}>
            <Fab size="medium" color="secondary" aria-label="add">
              {GetIcon(16)}
            </Fab>
          </Col>
          <Col xs={12} md={4}>
            <Fab size="medium" color="secondary" aria-label="add">
              {GetIcon(17)}
            </Fab>
          </Col>
        </Row>
      </Container>
    );
  }


  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <h1>Rupert Bogensperger</h1>
          {this.resume()}
          {this.CV()}
          {this.follow()}
        </Container>
      </Jumbotron>
    );
  }
}
