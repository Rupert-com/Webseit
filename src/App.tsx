import React, { Component, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import "./CustomBootstrap.scss";
import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import { Profile_Rupert as PRupert } from "./component/Profile_Rupert";
import { Contact as PContact } from "./component/Contact";
import { Height } from "@material-ui/icons";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import ReactPlayer from "react-player";
import toggleFullscreen, {
  fullscreenChange,
  isFullscreen,
} from "toggle-fullscreen";

export default function App() {
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
    </Router>
  );
}

// <iframe
//        id="YTiframeContainer"
//     title="ISS"
//  src="https://www.youtube.com/embed/EEIk7gwjgIM?"
// allowFullScreen
// className="position-fixed YTiframe h-100 w-100"
// />
interface iHome {}
interface iHomeState {}
class Home extends Component<iHome, iHomeState> {
  constructor(props: iHomeState) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <div className="YTiframeContainer fixed-top">
        <ReactPlayer
          className="position-absolute YTiframe h-100 w-100"
          url="https://www.youtube.com/watch?v=EEIk7gwjgIM"
          playing={!0}
          height="100%"
          width="100%"
          
        ></ReactPlayer>
        <div className="d-flex position-relative YTiframeOverlay h-100 w-100">
          <div className="Banner bg-800 w-100">
            <div className="BannerContent bg-800">
              <h1 className="text-white">Rupert Bogensperger</h1>
              <div className="p-3  position-relative mb-5">
                <Row className="h-2 w-75 position-absolute border">
                  <Col xs="2" className="bg-success"></Col>
                  <Col xs="10" className="bg-light"></Col>
                </Row>
              </div>
              <Container>
                <Card>
                  <Card.Body>
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                    diam nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat, sed diam voluptua. At vero eos et accusam et
                    justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                    sea takimata sanctus est Lorem ipsum dolor sit amet. Duis
                    autem vel eum iriure dolor in hendrerit in vulputate velit
                    esse molestie consequat, vel illum dolore eu feugiat nulla
                    facilisis at vero eros et accumsan et iusto odio dignissim
                    qui blandit praesent luptatum zzril delenit augue duis
                    dolore te feugait nulla facilisi. Lorem ipsum dolor sit
                    amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                    commodo consequat. Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla
                    facilisi. Nam liber tempor cum soluta nobis eleifend option
                    congue nihil imperdiet doming id quod mazim placerat facer
                    possim assum. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata
                    sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor
                    sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, At accusam
                    aliquyam diam diam dolore dolores duo eirmod eos erat, et
                    nonumy sed tempor et et invidunt justo labore Stet clita ea
                    et gubergren, kasd magna no rebum. sanctus sea sed takimata
                    ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem
                    ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                    nonumy eirmod tempor invidunt ut labore et dolore magna
                    aliquyam erat. Consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
                    eirmod tempor invidunt ut labore et dolore magna aliquyam
                    erat, sed diam voluptua. At vero eos et accusam et justo duo
                    dolores et ea rebum. Stet clita kasd gubergren, no sea
                    takimata sanctus. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At
                    vero eos et accusam et justo duo dolores et ea rebum. Stet
                    clita kasd gubergren, no sea takimata sanctus est Lorem
                    ipsum dolor sit amet. Duis autem vel eum iriure dolor in
                    hendrerit in vulputate velit esse molestie consequat, vel
                    illum dolore eu feugiat nulla facilisis at vero eros et
                    accumsan et iusto odio dignissim qui blandit praesent
                    luptatum zzril delenit augue duis dolore te feugait nulla
                    facilisi. Lorem ipsum dolor sit amet, consectetuer
                    adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
                    minim veniam, quis nostrud exerci tation ullamcorper
                    suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    Duis autem vel eum iriure dolor in hendrerit in vulputate
                    velit esse molestie consequat, vel illum dolore eu feugiat
                    nulla facilisis at vero eros et accumsan et iusto odio
                    dignissim qui blandit praesent luptatum zzril delenit augue
                    duis dolore te feugait nulla facilisi. Nam liber tempor cum
                    soluta nobis eleifend option congue nihil imperdiet doming
                    id quod mazim placerat facer possim assum. Lorem ipsum dolor
                    sit amet, consectetuer adipiscing elit, sed diam nonummy
                    nibh euismod tincidunt ut laoreet dolore magna aliquam erat
                    volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
                    tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
                    commodo
                  </Card.Body>
                </Card>{" "}
              </Container>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function Contact() {
  return <PContact />;
}
function Rupert() {
  return <PRupert />;
}
