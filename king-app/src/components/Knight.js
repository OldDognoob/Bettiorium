import React from "react";
import "./Cards.css";
import ReactPlayer from "react-player";

function Knight() {
  return (
    <div className="cards">
      <p>
        <strong>O</strong>nce upon a time in a faraway land, there was a tiny
        Kingdom, peaceful,prosperous and rich.(Yea!right)
      </p>
      <p>
        There was a tiny castle with the craziest servants in the whole
        land(Lunatics).
      </p>
      <p>
        However, they were not alone, a dangerous dragon with fire red eyes
        devoured maidens and kill any knights who wish to approach the forbidden
        land.
      </p>
      <p>
        The mighty Queen was not alone,ambitious and heroic knights protect her
        from enemies and the dragon even if they were terrible!.
      </p>
      <p>
        One Knight, named Crazy Knight Mosxiada made his stand in the castle to
        protect the weak servants from any terror and give his life to protect
        his loyal Queen!!
      </p>
      <p>
        <strong>T</strong>his is the story of our Bettiorium Kingdom and the
        tails of our crazy loyal knight Mosxiada!!
      </p>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=kyAD0Y6mM94"
        controls
        playbackRate={2}
        width="896px"
        height="504px"
      />
    </div>
  );
}

export default Knight;
