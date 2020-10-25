import React from "react";
import "./Cards.css";
import ReactPlayer from "react-player";

function Love() {
  return (
    <div className="cards">
      <h1>Words are not enough to describe how much we love you all!</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=u6EdMjo8d18"
        controls
        playbackRate={1}
        width="896px"
        height="504px"
      />
    </div>
  );
}
export default Love;
