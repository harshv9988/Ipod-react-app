import React from "react";
import menu from "../assets/menu.svg";
import fastforward from "../assets/fast-forward.svg";
import fastbackward from "../assets/fast-backward.svg";
import playpause from "../assets/playpause.svg";

const Wheel = (props) => {
  const { centerClick, showMenu, playPause } = props;

  return (
    <div className="wheel" id="rotatediv">
      {/*wheel div conatining all images*/}
      <div className="wheel-button">
        <img src={menu} alt="Menu" className="menu-image" onClick={showMenu} />
        <img src={fastforward} className="fastforward-image" alt="forward" />
        <img src={fastbackward} className="fastbackward-image" alt="backward" />
        <img
          src={playpause}
          className="playpause-image"
          onClick={playPause}
          alt="Play/Pause"
        />
        <div className="center-button" onClick={centerClick}></div>
      </div>
    </div>
  );
};

export default Wheel;
