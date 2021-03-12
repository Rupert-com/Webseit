import "./css/App.css";
import "./css/CustomBootstrap.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Component } from "react";
import { Contact as PContact } from "./component/Contact/Contact";
import { Container, Row, Col } from "react-bootstrap";
import { getSvgIconMaterial as GetIcon } from "./BaseJSX";
import { ListItem, ListItemText, List, ListItemIcon } from "@material-ui/core";
import { Profile_Rupert as PRupert } from "./component/Profile/Profile_Rupert";
import { SVG_HTML as HTML } from "./assets/images/index";
import Header from "./component/Header";
import Home from "./component/Home";

interface IAppState {}

interface IAppState_State {
  svg?: string;
}
export default class App extends Component<IAppState, IAppState_State> {
  constructor(props: IAppState) {
    super(props);
    this.state = { svg: null };
  }

  Contact() {
    return <PContact />;
  }

  Rupert() {
    return <PRupert />;
  }

  // HTR(htmlInput: string) {
  //   const htmlToReactParser = new HtmlToReactParser();
  //   var reactElement = htmlToReactParser.parse(htmlInput);
  //   return ReactDOMServer.renderToStaticMarkup(reactElement);
  // }
  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Route path={process.env.PUBLIC_URL + "/contact"}>
            {this.Contact}
          </Route>
          <Route exact path={process.env.PUBLIC_URL + "/"}>
            <Container fluid>
              <Row>
                <Col md="9">
                  <Home />
                </Col>
                <Col md="3" className="bg-light">
                  <div style={{ textAlign: "center" }}>
                    <h3>Quicklinks</h3>
                    <hr className="bg-tailor" />
                    <List>
                      <ListItemLink href="#simple-list">
                        <ListItemIcon>{GetIcon(HTML)}</ListItemIcon>
                        <ListItemText primary="Spam" />
                      </ListItemLink>
                      <ListItemLink href="#simple-list">
                        <ListItemText primary="Spam" />
                      </ListItemLink>
                      <ListItemLink href="#simple-list">
                        <ListItemText primary="Spam" />
                      </ListItemLink>
                      <ListItemLink href="#simple-list">
                        <ListItemText primary="Spam" />
                      </ListItemLink>
                    </List>
                  </div>
                </Col>
              </Row>
            </Container>
          </Route>
          <Route path={process.env.PUBLIC_URL + "/rupertbogensperger"}>
            {this.Rupert}
          </Route>
        </Switch>
      </Router>
    );
  }
}

function ListItemLink(props: any) {
  return <ListItem alignItems="center" button component="a" {...props} />;
}
