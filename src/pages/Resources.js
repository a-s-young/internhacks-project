import React from 'react';
import List from "../components/List";
import Title from '../components/Title';

const data = ["Guide to Allyship",
    "10 Steps to Non-Optical Allyship",
    "Mosaic Church: A Conversation on Race, Justice, and Inequality",
    "Guide to Virtual Protesting",
    "Natl Resource List #GeorgeFloyd+",
    "Talking to Children About Race",
    "14 Black Funds and 23 Creative Ecosystems to Support",
    "Black Designers + Black-Owned Studios",
    "“Social Justice 101” by Erika Hart",
    "Practical Guide to Protesting & Pandemic Prevention",
    "Prompt Letter to LAPD Commissioner",
    "Legal Aid for Protestors",
    "Register to Vote",
    "Anti Racist Podcasts",
    "How Kids Learn Prejudice",
    "Home from College's 87 Ways you Can Help",
    "Red Table Talk: Unpacking White Privilege and Prejudice"
    ]
export default function Resources(){
    return(
        
        <div style={{ width: "100vw"}}>
            <Title title="More Resources" subheading="Not enough? Here is an archive of more masterlists and toolkits we reccomend"/>
            <List data={data} alignment="left"/>
        </div>
    );
}