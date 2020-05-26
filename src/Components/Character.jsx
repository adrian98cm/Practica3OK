import React from "react";
import Styles from "./Styles.css";

const Character = props => {
  const { name, actor, image } = props.character;
  return (
    <div className="Character">
      <div className="Image">
        <img className="Caratula" src={image} />
        <div className="InfoImage">
          <h5>{name}</h5>
          <span>Actor:{actor}</span>
        </div>
      </div>
    </div>
  );
};
export default Character;
