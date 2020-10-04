import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC CRAZY LOYAL CITIZENS!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/Betty.jpg"
              text="Staying Alive"
              label="Queen of Bettiorium"
              path="/about-us"
            />
            <CardItem
              src="images/Nickos.jpg"
              text="Big in Japan"
              label="Philosopher"
              path="/about-us"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/Mosxidis.jpg"
              text="Hot Stuf"
              label="Crazy"
              path="/about-us"
            />
            <CardItem
              src="images/GeorgeGiannis.jpg"
              text="When the Going Gets Tough, the Tough Get Going"
              label="Lunatics"
              path="/About-us"
            />
            <CardItem
              src="images/Rigas.jpg"
              text="Neon Towers"
              label="Mentor"
              path="/About-us"
            />
            <CardItem
              src="images/George.jpg"
              text="Touch Me"
              label="Adventure"
              path="/About-us"
            />
            <CardItem
              src="images/Dimos.jpg"
              text="Dance Monkey"
              label="Programmer"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
