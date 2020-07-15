import React from "react";

export default function Icon(props){
    return(
      <div style={{display: "flex", flexDirection: "column", textAlign: "center", width: "150px", height: "175px", margin: "50px"}}>
          <img src={props.image} alt={props.caption} width={props.width} height={props.height} />
          <h2 style={{fontSize: "19px"}}>{props.title}</h2>
          <p style={{fontSize: "17px"}}>{props.name}</p>
      </div>
    )
  }
