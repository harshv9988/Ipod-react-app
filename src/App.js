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

      musiclist : false,

    }

  }

  rotateClick = () => {
    var angle = 0;
    var target = document.getElementById('rotatediv');
    var region = new ZingTouch.Region(target);
    const self = this;
    var counter_clock = 0;

    region.bind(target, 'rotate', function(e) {
      // console.log('rotate effect');
      angle = e.detail.distanceFromLast;
      // console.log(angle);
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
});

}

  centerClick = () => {

   
    if(this.state.music && this.state.musiclist===false){
      this.setState({
        musiclist : true,
      })
    }
  }

 render(){
   const {coverflow, music, games, setting, musiclist} = this.state;
  return (
    <div className="App">

      <Screen
      coverflow = {coverflow}
      music = {music}
      games = {games}
      setting = {setting}
      musiclist = {musiclist}
      />

      <Wheel
        clickRotate = {this.rotateClick}
        centerClick = {this.centerClick}
      />
      
    </div>
  );
 }
}

export default App;
