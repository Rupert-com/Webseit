import { Component } from 'react';
import { Container, Jumbotron } from "react-bootstrap";
import { Contact_Form as CTForm } from "./Contact_Form";
interface IContact {

}

interface IContact_State {

}

export class Contact extends Component<IContact, IContact_State> {
  render() {
    return (
      <Jumbotron fluid>
        <Container>
          <CTForm />
        </Container>
      </Jumbotron>
    );
  }
}