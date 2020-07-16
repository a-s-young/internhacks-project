import React from 'react';
import List from "../components/List";
import Title from '../components/Title';
import {resources} from "../apis/resourceList";
export default function Resources(){
    return(
        
        <div style={{ width: "100vw"}}>
            <Title title="More Resources" subheading="Not enough? Here is an archive of more masterlists and toolkits we reccomend"/>
            <List data={resources} alignment="left"/>
        </div>
    );
}