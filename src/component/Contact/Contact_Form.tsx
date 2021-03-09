import { Component } from 'react';
import { Form, Row, Col, Button } from "react-bootstrap";
interface IContact_Form {

}

interface IContact_Form_State {

}

export class Contact_Form extends Component<IContact_Form, IContact_Form_State> {
  render() {
    return (
      <Form className="p-3 rounded bg-400 shadow">
        <Row>
          <Col>
            <Form.Group controlId="">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Jon" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group controlId="">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" placeholder="Enter email" rows={6}/>
            </Form.Group>
          </Col>
        </Row>
        <Button type="submit" className="my-1">
          Submit
  </Button>
      </Form>
    );
  }
}