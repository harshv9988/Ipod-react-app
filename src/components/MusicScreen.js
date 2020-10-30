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
          <div className="musicchild-2">BIRDS</div>
        </div>
      </div>
    </div>
  );
};
export default MusicScreen;
