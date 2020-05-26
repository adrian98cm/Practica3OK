import React, { Component } from 'react';
import './App.css';
import Data from "../assets/data";
import Content from "../Components/Content.jsx";
import cloneDeep from 'clone-deep';


class App extends Component {
  state={
      episodes:Data,
      boolean:0,
      episode:"",
  }

  voting=(episode_id,rating)=>{
    const rating10 = parseInt(rating,10);
    let newState = cloneDeep(this.state);
    newState.episodes[episode_id-1].rating.arrayRating.push(rating10);
    const average = array => array.reduce((prev,act)=>prev+act)/array.length;
    newState.episodes[episode_id-1].rating.mediaRating = Math.round(average(newState.episodes[episode_id-1].rating.arrayRating));
    this.setState(newState);
  }
  changeBoolean=(episode_id) =>{
    let newState = cloneDeep(this.state);
    const episode = newState.episodes.find(ep=>ep.episode_id===episode_id)
    newState.boolean=1;
    newState.episode=episode;
    this.setState(newState);
  }
  returnOriginal=()=>{
    let newState = cloneDeep(this.state);
    newState.episode="";
    newState.boolean=0;
    this.setState(newState);
  }

  render() {
    return (
      <div className="App">
        <div>
          <Content
            episodes={this.state.episodes}
            boolean={this.state.boolean}
            changeBoolean={this.changeBoolean}
            episode={this.state.episode}
            returnOriginal={this.returnOriginal}
            voting={this.voting}
          />
        </div>
        
      </div>
    );
  }
}

export default App;
