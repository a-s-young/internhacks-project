import React from "react";
import "../App.css";
import {Switch, Route, Link, BrowserRouter as Router} from "react-router-dom";
import Protest from "./Protest";
import Read from "./Read";
import Watch from "./Watch";
import Listen from "./Listen";
import Contact from "./Contact";
import Donate from "./Donate";
import Resources from "./Resources";
import Petitions from "./Petitions";
import BlackHistory from "./BlackHistory";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Router>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <nav className="Navbar">
            <div className="LearnBar">
              <div className="LearnNavHeading">Learn</div>
              <div className="LearnNavText">
                <Link to="/black_history">Black History</Link>
                <Link to="/read">Read</Link>
                <Link to="/watch">Watch</Link>
                <Link to="/listen">Listen</Link>
              </div>
            </div>

            <div className="ActionBar">
              <div className="ActionNavHeading">Action</div>
              <div className="ActionNavText">
                <Link to="/contact">Contact</Link>
                <Link to="/donate">Donate</Link>
                <Link to="/petitions">Sign</Link>
                <Link to="/protest">Protest</Link>
              </div>
            </div>
          </nav>
        </div>
      
        <Switch>
          <Route path="/protest">
            <Protest />
          </Route>
          <Route path="/read">
            <Read />
          </Route>
          <Route path="/watch">
            <Watch />
          </Route>
          <Route path="/listen">
            <Listen />
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
          <Route path="/black_history">
            <BlackHistory />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <BlackHistory />
          </Route>
        </Switch>
        </Router>
    </div>
  );
}

export default App;
