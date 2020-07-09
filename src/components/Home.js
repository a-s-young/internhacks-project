import React, { useState, useEffect } from "react";
import './Home.css'

export default function Home() {

  return (
    <div className='body'>
      <div className="left">
          <div className = "contentleft">
            <p>if you want to</p>
            <h1>learn</h1>
            <p id="history">history, read, watch, listen</p>
          </div>
      </div>
      <div className="right">
          <div className = "contentright">
            <p>if you want to take</p>
            <h1>action</h1>
            <p id="sign">sign, donate, protest, call/email</p>
          </div>
      </div>
    </div>
  );
}
