import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";
import ReactPlayer from "react-player";

function Cards() {
  return (
    <div className="cards">
      <p>
        <strong>O</strong>nce upon a time in a faraway land, there was a tiny Kingdom,
        peaceful,prosperous and rich.(Yea!right)
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
        from enemies and the dragon even if they were terrible!.{" "}
      </p>
      <p>
        One Knight, named Crazy Knight Mosxiada made his stand in the castle to
        protect the weak servants from any terror and give his life(be careful
        not to tear up your tights!)to protect his loyal Queen!!
      </p>
      <p>
        This is the story of our Bettiorium Kingdom and the tails of our crazy
        loyal knight Mosxiada!!
      </p>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=kyAD0Y6mM94"
        controls
        playbackRate={2}
        width="896px"
        height="504px"
      />

      <h1>The Knights of Bettiorium round table!</h1>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=8JirWkcgCc4"
        controls
        playbackRate={2}
        width="896px"
        height="504px"
      />

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Betty.jpg"
              text="A normal person during the day a medieval queen during the night!"
              label="Queen of Bettiorium"
              path="/about-us"
            />
            <CardItem
              src="images/Nickos.jpg"
              text="LionHeart Philosopher ready to show your destiny to the outer world! "
              label="Philosopher"
              path="/about-us"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Mosxidis.jpg"
              text="There is no doubt he might be crazy but at least it keep it interesting!"
              label="Crazy"
              path="/about-us"
            />
            <CardItem
              src="images/GeorgeGiannis.jpg"
              text="They are lunatics by nature and lunatics dont need training-they just are!"
              label="Lunatics"
              path="/About-us"
            />
            <CardItem
              src="images/Rigas.jpg"
              text="May the forces of evil become confused on the way to your house!"
              label="Mentor"
              path="/About-us"
            />
            <CardItem
              src="images/George.jpg"
              text="My mind is like my web browser 19 tabs are open, 3 are frozen and I have no idea where the music is coming from!"
              label="Adventure"
              path="/About-us"
            />
            <CardItem
              src="images/Dimos.jpg"
              text="He is the only person to fix your problem, you dont know you have in a way you dont understand!"
              label="Programmer"
              path="/About-us"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
