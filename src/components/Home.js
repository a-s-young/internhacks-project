import React, { useState, useEffect } from "react";
import getDailyFact from "../apis/dailyfact";

export default function Home() {
  const [fact, setFact] = useState({});

  useEffect(function dailyFact() {
    getDailyFact().then((fact) => {
      setFact(fact);
      console.log(fact);
    });
  }, []);

  return (
    <div style={{height: "100vh"}}>
      <h1>Black History Fact of the Day: {fact.date}</h1>
      <h4>{fact.title}</h4>
      <p>{fact.info}</p>
    </div>
  );
}
