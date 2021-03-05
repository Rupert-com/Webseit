import React, { Component, MouseEvent } from 'react';
import { Profile_Rupert_Timeline as Timeline } from "./Profile_Rupert_Timeline";
import { Row, Col, Card, Jumbotron, Container } from 'react-bootstrap';
import Fab from '@material-ui/core/Fab';

import { getIconFromSVGContext as GetIcon } from "./BaseJSX";


interface IfollowItem {
  picture: number;
  link?: string;
}
const followItems: IfollowItem[] = [
  { picture: 15, link: "https://github.com/Rupert-com" },
  { picture: 16, link: "https://www.instagram.com/ru4ert/" },
  { picture: 17, link: "https://www.linkedin.com/in/rupert-bogensperger-43707a192/" },
]

interface IProfile_Rupert {

}

interface IProfile_Rupert_State {

}

export class Profile_Rupert extends Component<IProfile_Rupert, IProfile_Rupert_State> {

  CV() {
    return (
      <Card className="mb-3 bg-300 shadow">
        <Card.Header>Resume</Card.Header>
        <Card.Body>
          <Timeline />
        </Card.Body>
      </Card>
    );
  }

  resume() {
    return (
      <Card className="mb-3 bg-300 shadow">
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

  onclickfollow(event: MouseEvent) {
    event.preventDefault();
    window.open(event.currentTarget.getAttribute("href"));
  }

  follow() {
    return (
      <Card className="mb-3">
        <Row>
          {followItems.map((v) => {
            return (
              <Col className="my-2" xs={12} md={12 / followItems.length}>
                <Fab className="mx-auto d-flex" size="large" color="inherit" aria-label="add">
                  {GetIcon(v.picture, { width: 40, height: "auto" })}
                </Fab>
                <a href={v.link} className="mx-auto d-flex position-relative" style={{ top: -60, height:70, width:70, background: "transparent" }}>
                </a>
              </Col>
            );
          })}
        </Row>
      </Card>
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
