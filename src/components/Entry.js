import React from "react";
import {Link} from "react-router-dom";

export default function Title(props){
    return(
      <div>
        <h2>{props.title}</h2>
        <p>{props.text}</p>
      </div>
    )
  }
