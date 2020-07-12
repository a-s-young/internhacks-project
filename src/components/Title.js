import React from "react";
import {Link} from "react-router-dom";

export default function NavBar(){
    return(
      <div style={{ display:"flex", justifyContent: "center"}}>
            <nav className="Navbar">
              <div className="LearnBar">
                <div className="LearnNavHeading">Learn</div>
                <div className="LearnNavText">
                  <Link as="a" to="/black_history">Black History</Link>
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
    )
  }
