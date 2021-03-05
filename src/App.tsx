import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import './CustomBootstrap.scss';
import logo from './logo.svg';
import './App.css';
import Header from "./component/Header";
import { Profile_Rupert as PRupert } from "./component/Profile_Rupert";
import { Contact as PContact } from "./component/Contact";
import { Height } from "@material-ui/icons";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/rupertbogensperger">
          <Rupert />
        </Route>
      </Switch>
    </Router >
  );
}
// 1 != 2

export default App;
function Home() {
  return (
    <div className="YTiframeContainer">
      <iframe
        title="ISS"
        src="https://www.youtube.com/embed/EEIk7gwjgIM?controls=0&autoplay=1&fs=0&controls=0&showinfo=0&rel=0&disablekb=0&mute=1"
        allowFullScreen
        className="position-absolute YTiframe h-100 w-100"
      />
      <div className="d-flex position-relative YTiframeOverlay h-100 w-100">
        <div className="Banner bg-800 w-100">
          <div className="BannerContent bg-800">
            <h1 className="text-white">Rupert Bogensperger</h1>
            <div className="p-3  position-relative">
              <Row className="h-2 w-75 position-absolute border">
                <Col xs="2" className="bg-success"></Col>
                <Col xs="10" className="bg-light"></Col>
              </Row>
            </div>
            <Container>

            </Container>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return <PContact />;
}
function Rupert() {
  return <PRupert />;
}
