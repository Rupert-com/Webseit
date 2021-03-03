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

export default App;

function Home() {
  return <h2>Home 😎</h2>;
}

function Contact() {
  return <h2>Contact</h2>;
}
function Rupert() {
  return <PRupert />;
}
