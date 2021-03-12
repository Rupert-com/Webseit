import { Navbar, Nav, Card } from "react-bootstrap";
import { FILE_Rupert as Rupert } from "./../assets/images/index";

export default function Header() {
  return (
    <Navbar
      style={{ minHeight: "78px" }}
      expand="md"
      bg="tailor"
      variant="dark"
      className="border-bottom border-dark border-lg"
    >
      <Navbar.Brand href="./rupertbogensperger" className="py-0 pb-a">
        Rupert Bogensperger
      </Navbar.Brand>
      <Card>
        <Card.Body className="p-1">
          <img
            src={Rupert}
            width="50"
            height="50"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Card.Body>
      </Card>
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-sm-2">
          <Nav.Link href="./resources">Resources</Nav.Link>
          <Nav.Link href="./">Home</Nav.Link>
          <Nav.Link href="./">Home</Nav.Link>
          <Nav.Link href="./contact">Kontakt</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}


