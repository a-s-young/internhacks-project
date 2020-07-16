import React from "react";

export default function Title(props){
    return(
      <div style={{
        textAlign: "center",
        margin: "20px auto"
      }}>
        <h1 style={{
          fontSize: "64px"
        }}>{props.title}</h1>
        <p>{props.subheading}{props.extra}</p>
      </div>
    )
  }
