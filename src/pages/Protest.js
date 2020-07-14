import React from 'react';
import Title from "../components/Title";
import List from "../components/List";

const protestInfo = [ 
"1.  Ask hometown friends if they know where some are happening",
"2. Check your social media; someone you follow may have posted information on one",
"3. Organize your own!"
]

const protestTips = [
"Practical Guide to Protesting & Pandemic Prevention",
"Guide to Virtual Protesting",
"Protestors Rights",
"Supplies For DC Protestors",
"Map of Protests",
"Delete Your Digital Footprint",
"Cop Spotting 101",
"How to Treat Someone Who Has Been Tear Gassed",
"Guide to Data Protection"
]

export default function Protest(){
    return(
        <div style={{height: "100vh", width: "100vw", backgroundColor: "#28272C", color: "#e6e3db"}}>
            <Title title="Protest Information" subheading="Protest Info"/>
            <List data={protestInfo} alignment="center" title="How to Find Protests Near You:"/>
            <List data={protestTips} alignment="left" title="Tips Before You Go"/>
        </div>
    );
}