import React from "react";
import Styles from "./Styles.css";
import Character from "./Character.jsx";
import yellow from "../assets/yellow.svg";

const EpisodeSelected = props => {

  const {
    characters,
    title,
    image,
    episode_id,
    director,
    release_date,
    opening_crawl
  } = props.episode;
  const { changeBoolean,voting } = props;

  return (
    <div className="EpisodeSelected">
      <div className="ImageSelected">
        <img className="img" src={image} />
        <div className="estrellasVotar">
          <img className="yellow" onClick={()=>voting(episode_id,1)}src={yellow} alt="" />
          <img className="yellow" onClick={()=>voting(episode_id,2)} src={yellow} alt="" />
          <img className="yellow" onClick={()=>voting(episode_id,3)} src={yellow} alt="" />
          <img className="yellow" onClick={()=>voting(episode_id,4)} src={yellow} alt="" />
          <img className="yellow" onClick={()=>voting(episode_id,5)} src={yellow} alt="" />
        </div>
        <div className="InfoImageSelected">
          <p>Title:{title}</p>
          <p>Episode:{episode_id}</p>
          <p>Director:{director}</p>
          <p>Release:{release_date}</p>
          <p>Begining:{opening_crawl}</p>
        </div>
      </div>
    </div>
  );
};
export default EpisodeSelected;
