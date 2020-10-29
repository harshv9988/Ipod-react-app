import React from "react";
import gameimage from "../assets/ipod-games.jpg";

const GamesScreen = (props) => {
  const { gamesscreen } = props;
  return (
    <div className={`${gamesscreen ? "games-screen" : "hide"}`}>
      <div className="display-screen">
        <img src={gameimage} alt="game image" />
      </div>
    </div>
  );
};
export default GamesScreen;
