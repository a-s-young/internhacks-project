import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Protest from "./pages/Protest";
import Read from "./pages/Read";
import Watch from "./pages/Watch";
import Listen from "./pages/Listen";
import Contact from "./pages/Contact";
import Donate from "./pages/Donate";
import Resources from "./pages/Resources";
import Petitions from "./pages/Petitions";
import BlackHistory from "./pages/BlackHistory";
import Home from "./pages/Home";
import NavBar from "./components/NavBar";

function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/protest">
            <NavBar />
            <Protest />
          </Route>
          <Route path="/read">
            <NavBar />
            <Read />
          </Route>
          <Route path="/watch">
            <NavBar />
            <Watch />
          </Route>
          <Route path="/listen">
            <NavBar />
            <Listen />
          </Route>
          <Route path="/contact">
            <NavBar />
            <Contact />
          </Route>
          <Route path="/donate">
            <NavBar />
            <Donate />
          </Route>
          <Route path="/petitions">
            <NavBar />
            <Petitions />
          </Route>
          <Route path="/resources">
            <NavBar />
            <Resources />
          </Route>
          <Route path="/black_history">
            <NavBar />
            <BlackHistory />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
