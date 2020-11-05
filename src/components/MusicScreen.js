import React from "react";
import songposter from "../assets/musicscreen-poster.jpg";
import battery from "../assets/battery.svg";
import playicon from "../assets/play.svg";
import pause from "../assets/pause.svg";

const MusicScreen = (props) => {
  const { musicscreen, coverflowscreen, globalplay, play } = props;
  return (
    <div
      className={`${musicscreen || coverflowscreen ? "music-screen" : "hide"}`}
    >
      <div className="display-screen">
        {/* -------------------------------------Header-------------------------------------------------------- */}
        <div className="header specialbordershift">
          <span className="header-name">iPod.js</span>
          <span className={`${globalplay ? "" : "hide"}`}>
            <span className={`${play ? "play" : "hide"}`}>
              <img src={playicon} alt="play" />
            </span>
            <span className={`${play ? "hide" : "play"}`}>
              <img src={pause} alt="pause" />
            </span>
          </span>
          <span className="battery">
            <img src={battery} alt="battery" />
          </span>
        </div>
        {/*--------------------------------------Music screen flex------------------------------------------------- */}
        <div className="musicscreen-flex">
          <div className="musicchild-1">
            <img src={songposter} alt="songposter" />
          </div>
          <div className="musicchild-2">
            <h3>BIRDS</h3>
            <h4>BIRDS</h4>
            <h4>Composed By</h4>
            <h4>Imagine Dragons</h4>
          </div>
        </div>
        {/* ------------------------------------Timer and Bar------------------------------------------------------------ */}
        <div className="bar-container">
          <span className="left-span">0:00</span>
          <div className="outer">
            <div className="inner">
              <div className="float-div"></div>
            </div>
          </div>
          <span className="right-span">3:39</span>
        </div>
      </div>
    </div>
  );
};
export default MusicScreen;
