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
    <div style={{ width: "100vw"}}>
      <Title title="Black History" subheading="Fact of the day: " extra={fact.info} />
      
      <Entry title="Tuskeegee Syphilis Experiment" text="The Tuskegee Study of Untreated Syphilis in the African American Male was a clinical study conducted between 1932 and 1972 by the United States Public Health Service.The Tuskegee Study of Untreated Syphilis in the African American Male was a clinical study conducted between 1932 and 1972 by the United States Public Health Service. The purpose of this study was to observe the natural history of untreated syphilis; the African-American men in the study were only told they were receiving free health care from the Federal government of the United States. "/>  
      <Entry title="Tuskeegee Syphilis Experiment" text="The Tuskegee Study of Untreated Syphilis in the African American Male was a clinical study conducted between 1932 and 1972 by the United States Public Health Service.The Tuskegee Study of Untreated Syphilis in the African American Male was a clinical study conducted between 1932 and 1972 by the United States Public Health Service. The purpose of this study was to observe the natural history of untreated syphilis; the African-American men in the study were only told they were receiving free health care from the Federal government of the United States. "/>  
      <Entry title="Tuskeegee Syphilis Experiment" text="The Tuskegee Study of Untreated Syphilis in the African American Male was a clinical study conducted between 1932 and 1972 by the United States Public Health Service.The Tuskegee Study of Untreated Syphilis in the African American Male was a clinical study conducted between 1932 and 1972 by the United States Public Health Service. The purpose of this study was to observe the natural history of untreated syphilis; the African-American men in the study were only told they were receiving free health care from the Federal government of the United States. "/>  
      <Entry title="Tuskeegee Syphilis Experiment" text="The Tuskegee Study of Untreated Syphilis in the African American Male was a clinical study conducted between 1932 and 1972 by the United States Public Health Service.The Tuskegee Study of Untreated Syphilis in the African American Male was a clinical study conducted between 1932 and 1972 by the United States Public Health Service. The purpose of this study was to observe the natural history of untreated syphilis; the African-American men in the study were only told they were receiving free health care from the Federal government of the United States. "/>  
      <Entry title="Tuskeegee Syphilis Experiment" text="The Tuskegee Study of Untreated Syphilis in the African American Male was a clinical study conducted between 1932 and 1972 by the United States Public Health Service.The Tuskegee Study of Untreated Syphilis in the African American Male was a clinical study conducted between 1932 and 1972 by the United States Public Health Service. The purpose of this study was to observe the natural history of untreated syphilis; the African-American men in the study were only told they were receiving free health care from the Federal government of the United States. "/>  
      
    </div>
  );
}
