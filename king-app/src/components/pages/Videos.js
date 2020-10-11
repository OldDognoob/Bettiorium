import React from 'react';
import List from "../List";
import ReactPlayer from "react-player";
import Green from "../../green.jpg";
import '../../App.css';

function Videos(){
  return(
    <>
    <div className="hero">
      <img src={Green} alt="green"/>
      <List/>
    </div>
    </>
  )
}
export default Videos;