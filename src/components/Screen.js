import React from "react";
import songposter from "../assets/song-poster.jpg";
import artistposter from "../assets/imagine-dragons.png";
import settingposter from "../assets/settings.svg";
import gameposter from "../assets/game-console.svg";
import rightArrow from "../assets/arrow_right.svg";
import battery from "../assets/battery.svg";
import playicon from "../assets/play.svg";
import pause from "../assets/pause.svg";

const Screen = (props) => {
  const {
    coverflow,
    music,
    games,
    setting,
    musiclist,
    artist,
    songs,
    musicscreen,
    coverflowscreen,
    gamesscreen,
    settingscreen,
    play,
    globalplay,
  } = props;
  return (
    <div
      className={`${
        musicscreen || coverflowscreen || gamesscreen || settingscreen
          ? "hide"
          : "screen"
      }`}
    >
      <div className="display-flex-screen">
        <div className="child-1">
          <div className={`${musiclist ? "hide" : "list-container"}`}>
            <div className="header ">
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
            <div className={`${coverflow ? "active" : "coverflow"}`}>
              coverflow
              <img src={rightArrow} alt="-->" className="arrow" />
            </div>
            <div className={`${music ? "active" : "music"}`}>
              Music
              <img src={rightArrow} alt="-->" className="arrow" />
            </div>
            <div className={`${games ? "active" : "games"}`}>
              Games
              <img src={rightArrow} alt="-->" className="arrow" />
            </div>
            <div className={`${setting ? "active" : "setting"}`}>
              Setting
              <img src={rightArrow} alt="-->" className="arrow" />
            </div>
          </div>
          <div className={`${musiclist ? "list-music-container" : "hide"}`}>
            <div className="header">
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
            <div className={`${artist ? "active" : "artist"}`}>
              Artist
              <img src={rightArrow} alt="-->" className="arrow" />
            </div>
            <div className={`${songs ? "active" : "songs"}`}>
              Songs
              <img src={rightArrow} alt="-->" className="arrow" />
            </div>
          </div>
        </div>
        <div className="child-2 bordershift">
          <img
            src={artistposter}
            alt="poster"
            className={`${coverflow ? "wallpaper" : "hide"}`}
          />
          <img
            src={songposter}
            alt="poster"
            className={`${music ? "wallpaper" : "hide"}`}
          />
          <div className="image-container">
            <img
              src={gameposter}
              alt="gameicon"
              className={`${games ? "wallpaper" : "hide"}`}
            />
            <img
              src={settingposter}
              alt="settingicon"
              className={`${setting ? "wallpaper" : "hide"}`}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Screen;
