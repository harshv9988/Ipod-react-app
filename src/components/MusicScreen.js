import React from "react";
import songposter from "../assets/musicscreen-poster.jpg";

const MusicScreen = (props) => {
  const { musicscreen, coverflowscreen } = props;
  return (
    <div
      className={`${musicscreen || coverflowscreen ? "music-screen" : "hide"}`}
    >
      <div className="display-screen">
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
        <div className="bar-container">
          <span className="left-span">0:00</span>
          <div className="outer">
            <div className="inner"></div>
          </div>
          <span className="right-span">3:39</span>
        </div>
      </div>
    </div>
  );
};
export default MusicScreen;
