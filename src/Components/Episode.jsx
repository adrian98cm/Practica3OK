import React from "react";
import Styles from "./Styles.css";
import Character from "./Character.jsx";
import yellow from "../assets/yellow.svg";
import black from "../assets/black.svg";

const Episode = props => {

  const { characters, title, image, episode_id } = props.episode;
  const { ratingMedia, longitud } = props;
  const { changeBoolean } = props;

  const ratingsArrayYellow = [];
  for (let i = 0; i < ratingMedia; i++) {
    ratingsArrayYellow.push(<img className="yellowStar" src={yellow} alt="" />);
  }
  console.log(ratingsArrayYellow);
  const ratingsArrayBlack = [];
  for (let i = 0; i < 5 - ratingMedia; i++) {
    ratingsArrayBlack.push(<img className="blackStar" src={black} alt="" />);
  }
  console.log(ratingsArrayBlack);
  return (
    console.log(ratingMedia),
    (
      <div
        className="Episode"
        onClick={() => changeBoolean(props.episode.episode_id)}
      >
        <div className="Image">
          <img className="Caratula" src={image} />
          <div className="InfoImage">
            <h5>{title}</h5>
            <p>Episode:{episode_id}</p>
            <div className="filmRating">
              {ratingsArrayYellow}
              {ratingsArrayBlack}
              {longitud}
            </div>
          </div>
        </div>
      </div>
    )
  );
};
export default Episode;
