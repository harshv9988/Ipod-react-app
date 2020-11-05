import React from "react";
import Wheel from "./components/Wheel";
import Screen from "./components/Screen";
import MusicScreen from "./components/MusicScreen";
import GamesScreen from "./components/GamesScreen";
import SettingScreen from "./components/SettingScreen";
import ZingTouch from "zingtouch";
import song from "./assets/songs/Imagine-Dragons-Birds.mp3";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      coverflow: true,
      music: false,
      games: false,
      setting: false,

      artist: true,
      songs: false,

      musiclist: false,
      musicscreen: false,
      gamesscreen: false,
      settingscreen: false,
      coverflowscreen: false,

      play: false,
      insidemusic: false,
      globalplay: false,

      timerfill: undefined,
      barfill: undefined,
    };

    this.audio = new Audio(song);
  }

  rotateClick = () => {
    var counter = 0;
    var counter2 = 0;
    const self = this;

    var target = document.getElementById("rotatediv");
    var activeRegion = ZingTouch.Region(target);

    activeRegion.bind(target, "rotate", function (event) {
      var angle = event.detail.distanceFromLast;

      if (
        self.state.musiclist === false &&
        self.state.coverflowscreen === false
      ) {
        if (angle < 0) {
          if (counter > 0 && counter <= 5) {
            self.setState({
              coverflow: true,
              music: false,
              games: false,
              setting: false,
            });
          } else if (counter > 5 && counter <= 10) {
            self.setState({
              coverflow: false,
              music: true,
              games: false,
              setting: false,
            });
          } else if (counter > 10 && counter <= 15) {
            self.setState({
              coverflow: false,
              music: false,
              games: true,
              setting: false,
            });
          } else if (counter > 15 && counter <= 20) {
            self.setState({
              coverflow: false,
              music: false,
              games: false,
              setting: true,
            });
          }

          if (counter < 0) {
            counter = 0;
          } else {
            counter = counter - 1;
          }
        } else if (angle > 0) {
          if (counter >= 0 && counter < 5) {
            self.setState({
              coverflow: true,
              music: false,
              games: false,
              setting: false,
            });
          } else if (counter >= 5 && counter < 10) {
            self.setState({
              coverflow: false,
              music: true,
              games: false,
              setting: false,
            });
          } else if (counter >= 10 && counter < 15) {
            self.setState({
              coverflow: false,
              music: false,
              games: true,
              setting: false,
            });
          } else if (counter >= 15 && counter < 20) {
            self.setState({
              coverflow: false,
              music: false,
              games: false,
              setting: true,
            });
          }

          if (counter > 20) {
            counter = 20;
          } else {
            counter = counter + 1;
          }
        }
      }
      // *********************************************************
      else if (self.state.musiclist === true) {
        if (angle < 0) {
          if (counter2 > 0 && counter2 <= 5) {
            self.setState({
              artist: true,
              songs: false,
            });
          } else if (counter2 > 5 && counter2 <= 10) {
            self.setState({
              artist: false,
              songs: true,
            });
          }

          if (counter2 < 0) {
            counter2 = 0;
          } else {
            counter2 = counter2 - 1;
          }
        } else if (angle > 0) {
          if (counter2 >= 0 && counter2 < 5) {
            self.setState({
              artist: true,
              songs: false,
            });
          } else if (counter2 >= 5 && counter2 < 10) {
            self.setState({
              artist: false,
              songs: true,
            });
          }

          if (counter2 > 10) {
            counter2 = 10;
          } else {
            counter2 = counter2 + 1;
          }
        }
      }
    });
  };

  centerClick = () => {
    if (this.state.music && this.state.musiclist === false) {
      // opening seconadary list of music screen
      this.setState({
        musiclist: true,
      });
    }

    if (this.state.musiclist && this.state.songs) {
      // opening music screen and playing song
      this.setState({
        musicscreen: true,
      });
      this.globalPlayPause(); // calling playpause to play the song
    } else if (this.state.musiclist && this.state.artist) {
      // opening music screen and playing song using artist option
      this.setState({
        musicscreen: true,
      });
      this.globalPlayPause(); // calling playpause to play the song
    } else if (this.state.musiclist === false && this.state.coverflow) {
      this.setState({
        coverflowscreen: true,
      });
      this.globalPlayPause();
    } else if (this.state.musiclist === false && this.state.games) {
      this.setState({
        gamesscreen: true,
      });
    } else if (this.state.musiclist === false && this.state.setting) {
      this.setState({
        settingscreen: true,
      });
    }
  };

  setWidth = () => {
    var fill = document.querySelector(".inner");
    var playingaudio = this.audio;
    let duration = playingaudio.duration;
    let base = duration / 100;

    this.state.barfill = setInterval(() => {
      let ct = parseInt(playingaudio.currentTime);
      let width = ct / base;
      fill.style.width = `${width}%`;
    }, duration * 10);
  };

  setTime = () => {
    var timer = document.querySelector(".left-span");

    var playingaudio = this.audio;

    this.state.timerfill = setInterval(() => {
      let ct = parseInt(playingaudio.currentTime);
      let minutes = parseInt(ct / 60);
      let seconds = parseInt(ct % 60);

      timer.innerText =
        seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`;
    }, 1000);
  };

  showMenu = () => {
    if (this.state.musiclist && this.state.musicscreen) {
      this.setState({
        musicscreen: false,
      });
    } else if (this.state.musiclist) {
      this.setState({
        musiclist: false,
      });
    }

    if (this.state.coverflowscreen) {
      this.setState({
        coverflowscreen: false,
      });
    }

    if (this.state.gamesscreen) {
      this.setState({
        gamesscreen: false,
      });
    }

    if (this.state.settingscreen) {
      this.setState({
        settingscreen: false,
      });
    }
  };

  playPause = () => {
    if (this.state.play === false) {
      this.setState(
        {
          play: true,
        },
        () => {
          this.setWidth();
          this.setTime();
          this.audio.play();
        }
      );
    } else if (this.state.play === true) {
      this.setState(
        {
          play: false,
        },
        () => {
          clearInterval(this.state.timerfill);
          clearInterval(this.state.barfill);
          this.audio.pause();
        }
      );
    }
  };

  globalPlayPause = () => {
    var playingaudio = this.audio;

    if (playingaudio.currentTime >= playingaudio.duration) {
      console.log("in");
      this.setState(
        {
          play: false,
        },
        () => {
          this.playPause();
        }
      );
    }

    if (this.state.globalplay === false) {
      this.playPause();
      this.setState({
        globalplay: true,
      });
    }
  };

  render() {
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
      globalplay,
      play,
    } = this.state;
    return (
      <div className="App">
        <div className="structure">
          <div className="body">
            <Screen
              coverflow={coverflow}
              music={music}
              games={games}
              setting={setting}
              musiclist={musiclist}
              artist={artist}
              songs={songs}
              musicscreen={musicscreen}
              coverflowscreen={coverflowscreen}
              gamesscreen={gamesscreen}
              settingscreen={settingscreen}
              play={play}
              globalplay={globalplay}
            />

            <MusicScreen
              musicscreen={musicscreen}
              coverflowscreen={coverflowscreen}
              play={play}
              globalplay={globalplay}
            />

            <GamesScreen gamesscreen={gamesscreen} />
            <SettingScreen settingscreen={settingscreen} />

            <Wheel
              clickRotate={this.rotateClick}
              centerClick={this.centerClick}
              showMenu={this.showMenu}
              playPause={this.playPause}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
