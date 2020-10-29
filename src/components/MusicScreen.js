import React from "react";

const MusicScreen = (props) => {
  const { musicscreen, coverflowscreen } = props;
  return (
    <div
      className={`${musicscreen || coverflowscreen ? "music-screen" : "hide"}`}
    >
      Fuckaaaaaaaaaaaaaaaaaa
    </div>
  );
};
export default MusicScreen;
