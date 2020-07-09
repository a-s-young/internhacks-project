import React from "react";
import "./Home.css";

let HomeBody = {
  margin: "0 0",
  display: "flex",
  flexDirection: "row",
  height: "100vh",
  width: "100vw",
}

export default function Home() {
  return (
    <div style={HomeBody}
    >
      <button type="button" className="left">
        <p>if you want to</p>
        <h1>learn</h1>
        <p id="history">history, read, watch, listen</p>
      </button>
      <button type="button" className="right" href="/protest">
        <p>if you want to take</p>
        <h1>action</h1>
        <p id="sign">sign, donate, protest, call/email</p>
      </button>
    </div>
  );
}
