import React from "react";
import '../App.css';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
        <div style={{display: "flex", justifyContent: "center"}}>
        <nav className="Navbar">
            <div className="LearnBar">
            <div className="LearnNavHeading">Learn</div>
            <div className="LearnNavText">
            <Link to="/home">Black History</Link>
            <Link to="/resources">Resources</Link>
            <Link to="/media">Media</Link>
            </div>
            
            </div>
           

           <div className="ActionBar">
           <div className="ActionNavHeading">Action</div>
           <div className="ActionNavText">
           <Link to="/contact">Contact</Link>
           <Link to="/donate">Donate</Link>
           <Link to="/petitions">Petitions</Link>
           <Link to="/protest">Protest</Link>
           </div>
           
           </div>
           
         </nav>
        </div>
          

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
      </Router>
    </div>
  );
}

export default App;
