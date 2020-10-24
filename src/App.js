import React from 'react';
import Wheel from './components/Wheel';
import Screen from './components/Screen';
import MusicScreen from './components/MusicScreen';
import ZingTouch from 'zingtouch';

class App extends React.Component  {

  constructor(){
    super();

    this.state={

      coverflow : true,
      music : false,
      games :false,
      setting : false,

      artist : true,
      songs : false,

      musiclist : false,
      musicscreen : false

    }

  }

  rotateClick = () => {
    var angle = 0;
    var target = document.getElementById('rotatediv');
    var region = new ZingTouch.Region(target);
    const self = this;
    var counter_clock = 0;
    var counter2 = 0;

    region.bind(target, 'rotate', function(e) {
     
        angle = e.detail.distanceFromLast;
      
        if(self.state.musiclist==false){

              if(angle>0){
                if(counter_clock>=0 && counter_clock<10){
                    self.setState({
                        coverflow : true,
                        music : false,
                        games :false,
                        setting : false,
                  })
                }
                else if(counter_clock>=10 && counter_clock<20){
                  self.setState({
                      coverflow : false,
                      music : true,
                      games :false,
                      setting : false,
                  })
                }
                else if(counter_clock>=20 && counter_clock<30){
                  self.setState({
                      coverflow : false,
                      music : false,
                      games :true,
                      setting : false,
                  })
                }
                else if(counter_clock>=30 && counter_clock<40){
                  self.setState({
                    coverflow : false,
                    music : false,
                    games :false,
                    setting : true,
                })
                }    
                
                if(counter_clock>40){
                  counter_clock=40;
                }
                else{
                  counter_clock = counter_clock+1;
                }
            }
      
      
            else if(angle<0){
      
      
              if(counter_clock>0 && counter_clock<=10){
                self.setState({
                    coverflow : true,
                    music : false,
                    games :false,
                    setting : false,
              })
            }
            else if(counter_clock>10 && counter_clock<=20){
              self.setState({
                  coverflow : false,
                  music : true,
                  games :false,
                  setting : false,
              })
            }
            else if(counter_clock>20 && counter_clock<=30){
              self.setState({
                  coverflow : false,
                  music : false,
                  games :true,
                  setting : false,
              })
            }
            else if(counter_clock>30 && counter_clock<=40){
              self.setState({
                coverflow : false,
                music : false,
                games :false,
                setting : true,
              })
            } 
            
            if(counter_clock<0){
              counter_clock = 0;
            }
            else{
              counter_clock = counter_clock-1;
            }
      
          }
      }


      else{
          if(angle>0){
            if(counter2>=0 && counter2<10){
                self.setState({
                    artist : true,
                    songs : false,
              })
            }
            else if(counter2>=10 && counter2<20){
              self.setState({
                  artist : false,
                  songs : true,
              })
            }

            if(counter2>20){
              counter2=20;
            }
            else{
              counter2 = counter2+1;
            }
        }
        else if(angle<0){
              if(counter2>0 && counter2<=10){
                self.setState({
                    artist : true,
                    songs : false,
              })
            }
            else if(counter2>10 && counter2<=20){
              self.setState({
                  artist : false,
                  songs : true,
              })
            }

            if(counter2<0){
              counter2 = 0;
            }
            else{
              counter2 = counter2-1;
            }
        }
      }

    });

}

  centerClick = () => {

   
    if(this.state.music && this.state.musiclist===false){
      this.setState({
        musiclist : true,
      })
    }

    if(this.state.musiclist && this.state.songs){
      this.setState({
        musicscreen : true
      })
    }
  }


  showMenu = () => {
    if(this.state.musiclist && this.state.musicscreen){
      this.setState({
        musicscreen : false,
      })
    }
    else if(this.state.musiclist){
      this.setState({
        musiclist : false
      })
    }
  }

 render(){
   const {coverflow, music, games, setting, musiclist, artist, songs, musicscreen} = this.state;
  return (
    <div className="App">

      <Screen
      coverflow = {coverflow}
      music = {music}
      games = {games}
      setting = {setting}
      musiclist = {musiclist}
      artist = {artist}
      songs = {songs}
      musicscreen = {musicscreen}
      />

      <MusicScreen
        musicscreen = {musicscreen}
      />

      <Wheel
        clickRotate = {this.rotateClick}
        centerClick = {this.centerClick}
        showMenu = {this.showMenu}
      />
      
    </div>
  );
 }
}

export default App;
