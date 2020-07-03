import React from "react";
import '../App.scss';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Protest from "./Protest";
import Media from "./Media";
import Home from "./Home";
import Contact from "./Contact";
import Donate from "./Donate";
import Resources from "./Resources";
import Petitions from "./Petitions";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="navbar-bg" expand="lg" variant="light">
            <Navbar.Brand href="/home">BLM Resources</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/donate">Donate</Nav.Link>
                <Nav.Link href="/petitions">Petitions</Nav.Link>
                <Nav.Link href="/resources">Resources</Nav.Link>
                <Nav.Link href="/media">Books, Film, TV</Nav.Link>
                <Nav.Link href="/protest">Protest</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>


          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/protest">
              <Protest />
            </Route>
            <Route path="/media">
              <Media />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/donate">
              <Donate />
            </Route>
            <Route path="/petitions">
              <Petitions />
            </Route>
            <Route path="/resources">
              <Resources />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
