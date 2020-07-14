import React from "react";

export default function Title(props){
    return(
      <div style={{
        textAlign: "center"
      }}>
        <h1>{props.title}</h1>
        <p>{props.subheading}{props.extra}</p>
      </div>
    )
  }
