import React from "react";
import Styles from "./Styles.css";
import Episode from "./Episode.jsx";
import CharacterMenu from "./CharacterMenu.jsx";
import Character from "./Character.jsx";

const Content = props => {
  const { episodes, changeBoolean, boolean, returnOriginal } = props;
  const characters = props.episode.characters;
  const title = props.episode.title;
  const img = props.episode.image;
  const episode = props.episode;
  const voting = props.voting;
  return (
    <div className="Content">
      {boolean === 0 ? (
        episodes.map(ep => (
          <Episode
            key={ep.episode_id}
            episode={ep}
            ratingMedia={ep.rating.mediaRating}
            longitud={ep.rating.arrayRating.length}
            changeBoolean={changeBoolean}
          />
        ))
      ) : (

          <CharacterMenu
            episodes={episodes}
            title={title}
            img={img}
            characters={characters}
            returnOriginal={returnOriginal}
            episode={episode}
            changeBoolean={changeBoolean}
            voting={voting}
          />
        )

      }
    </div>
  );
};
export default Content;
