import React from "react";

const divStyle = {
  textAlign: "center",
}
const logoStyle = {
  width: "50%"
}

const Jumbotron = () =>
  <div style = {divStyle}>
    <img 
    src="./The_New_York_Times_logo.png" alt = "The New York Times logo"
    style = {logoStyle}
    />
    <h1 className="text-center">
      <strong>
        <i className="fa fa-newspaper-o"></i> Article Search</strong>
    </h1>
  </div>



export default Jumbotron;