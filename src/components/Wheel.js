import React from 'react';
import menu from '../assets/menu.svg'
import fastforward from '../assets/fast-forward.svg'
import fastbackward from '../assets/fast-backward.svg'
import playpause from '../assets/playpause.svg'

const Wheel = () => {
    return (
        <div className="wheel">
            <div className="wheel-button">
                <img src={menu} alt="Menu" className="menu-image"/>
                <img src={fastforward} className="fastforward-image"/>
                <img src={fastbackward} className="fastbackward-image"/>
                <img src={playpause} className="playpause-image"/>
                <div className="center-button">

                </div>
            </div>
        </div>
    );
}

export default Wheel;