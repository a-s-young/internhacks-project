import React from "react";
import '../App.scss';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Protest from "./Protest";
import Media from "./Media";
import Home from "./Home";


function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar bg="navbar-bg" expand="lg" variant="dark">
            <Navbar.Brand href="/">BLM Resources</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/Protest">Protest Safety</Nav.Link>
                <Nav.Link href="/Media">Informative Media</Nav.Link>
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
