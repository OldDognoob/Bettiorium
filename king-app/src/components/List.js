import React from "react";
import "./Intro.css";
import CardItem from "./CardItem";
import ReactPlayer from "react-player";

function List() {
  return (
    <div className="cards">
      <h1> Bettiorium royal List</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=FQRrFVZAbs0"
              controls
              playbackRate={2}
              width="896px"
              height="504px"
            />
          </ul>
          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=vnienOlaAlk"
              controls
              playbackRate={2}
              width="896px"
              height="504px"
            />
          </ul>
          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=iQp1_GfDhwQ"
              controls
              playbackRate={2}
              width="896px"
              height="504px"
            />
          </ul>
          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=mAh-sOmjEjY"
              controls
              playbackRate={2}
              width="896px"
              height="504px"
            />
          </ul>
          <ul className="cards__items">
            <ReactPlayer
              url="hhttps://www.youtube.com/watch?v=NTqeiIsrp7o"
              controls
              playbackRate={2}
              width="896px"
              height="504px"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default List;
