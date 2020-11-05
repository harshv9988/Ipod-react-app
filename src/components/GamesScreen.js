import React from "react";
import gameimage from "../assets/ipod-games.jpg";

const GamesScreen = (props) => {
  const { gamesscreen } = props;
  return (
    <div className={`${gamesscreen ? "games-screen" : "hide"}`}>
      {/* ---------------------------------------------Game screen Image--------------------------------------------------- */}
      <div className="display-screen">
        <img src={gameimage} alt="game-image" className="round-image" />
      </div>
    </div>
  );
};
export default GamesScreen;
