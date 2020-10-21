import React from "react";
import "./Intro.css";
import CardItem from "./CardItem";
import { ButtonList } from "./ButtonList";
import ReactPlayer from "react-player";

function List() {
  return (
    <div className="cards">
      <h1> Bettiorium KingDom list</h1>
      <ButtonList
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
            onClick={console.log("hey")}
          >
            Watch our Kingdom <i className="far fa-play-circle" />
          </ButtonList>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/playlist?list=PLzLiE4VJVS9dic3OUaLf1n6zbeR_fQWac"
              className="react-player"
              playing={false}
              playbackRate={2}
              width="750px"
              height="504px"
            />
          </ul>
          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/playlist?list=PLzLiE4VJVS9eat_U0YARukOuRs0ofQCKB"
              className="react-player"
              playing={false}
              playbackRate={2}
              width="750px"
              height="504px"
            />
          </ul>

          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/playlist?list=PLzLiE4VJVS9fFF3L_uj_aLQfqKIWRY8U2"
              className="react-player"
              playing={false}
              playbackRate={2}
              width="750px"
              height="504px"
            />
          </ul>

          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/playlist?list=PLzLiE4VJVS9cjJC_jEq_rBNuDbQD9ovCA"
              className="react-player"
              playing={false}
              playbackRate={2}
              width="750px"
              height="504px"
            />
          </ul>

          <ul className="cards__items">
            <ReactPlayer
              url="https://www.youtube.com/playlist?list=PLzLiE4VJVS9dJqfCSK90vMXHWMOgMPxh1"
              className="react-player"
              playing={false}
              playbackRate={2}
              width="750px"
              height="504px"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default List;
