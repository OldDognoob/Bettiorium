import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>The Royal knights of round table!</h1>

      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Betty.jpg"
              text="Queen of Everything"
              label="Queen"
              path="/about-us"
            />
            <CardItem
              src="images/Nickos.jpg"
              text="Life is like a roll of toilet paper.The closer you get to the end the faster it goes."
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
              label="SwissKnifer"
              path="/About-us"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
