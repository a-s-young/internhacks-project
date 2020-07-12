import React, { useState, useEffect } from "react";
import getDailyFact from "../apis/dailyfact";
import Title from "../components/Title"
import Entry from "../components/Entry"

export default function BlackHistory() {
  const [fact, setFact] = useState({});

  useEffect(function dailyFact() {
    getDailyFact().then((fact) => {
      setFact(fact);
    });
  }, []);



  return (
    <div style={{ height: "100vh", width: "100vw"}}>
      <Title title="Black History" subheading="Fact of the day: " extra={fact.info} />
      <Entry title="Title" text="This unit is based on the height of the viewport. This unit is based on the height of the viewport. A value of 1vh is equal to 1% of the viewport height"/>
    </div>
  );
}
