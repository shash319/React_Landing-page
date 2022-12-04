import React from "react";
import './App.css';

  function Features(props){
    return(
        <div className="features2"> 
            <h3>{props.featureTitle}</h3>
            <p>{props.featureDesc}</p>
        </div>
    )
  }
  export default Features
