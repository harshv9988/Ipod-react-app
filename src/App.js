import React from 'react';
import Wheel from './components/Wheel'
import Screen from './components/Screen'
import ZingTouch from 'zingtouch';

class App extends React.Component  {

  rotateClick = () => {
    let angle = 0;
    var target = document.getElementById('rotatediv');
    var region = new ZingTouch.Region(target);

    region.bind(target, 'rotate', function(e) {
      console.log('rotate effect');
    });

  }

 render(){
  return (
    <div className="App">

      <Screen/>

      <Wheel
        clickRotate = {this.rotateClick}
      />
      
    </div>
  );
 }
}

export default App;
