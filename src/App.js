import React from 'react';
import Wheel from './components/Wheel'
import Screen from './components/Screen'
import ZingTouch from 'zingtouch';

class App extends React.Component  {

  constructor(){
    super();

    this.state={

      coverflow : true,
      music : false,
      games :false,
      setting : false,

    }

  }

  rotateClick = () => {
    let angle = 0;
    var target = document.getElementById('rotatediv');
    var region = new ZingTouch.Region(target);

    region.bind(target, 'rotate', function(e) {
      console.log('rotate effect');
    });

  }

 render(){
   const {coverflow, music, games, setting} = this.state;
  return (
    <div className="App">

      <Screen
      coverflow = {coverflow}
      music = {music}
      games = {games}
      setting = {setting}
      />

      <Wheel
        clickRotate = {this.rotateClick}
      />
      
    </div>
  );
 }
}

export default App;
