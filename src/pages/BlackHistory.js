import React, { useState, useEffect } from "react";
import getDailyFact from "../apis/dailyfact";
import Title from "../components/Title"
import Entry from "../components/Entry"
import blackHistoryData from "../apis/blackHistoryData"

export default function BlackHistory() {
  const [fact, setFact] = useState({});

  useEffect(function dailyFact() {
    getDailyFact().then((fact) => {
      setFact(fact);
    });
  }, []);

  const entries = blackHistoryData.map(data => <Entry key={data.id} title={data.title} text={data.info} />)

  return (
    <div style={{ width: "100vw"}}>
      <Title title="Black History" subheading="Fact of the day: " extra={fact.info} />
      {entries}
    </div>
  );
}
