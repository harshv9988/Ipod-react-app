import React from 'react';

const Screen = (props) =>{
    const {coverflow, music, games, setting, musiclist, artist, songs} = props;
    return (
        <div className="screen">
            <div className="display-screen">
                <div className={`${musiclist ? "hide" : "list-container"}`}>
                    <div className="title">
                        IPOD.js
                    </div>
                    <div className={`${coverflow ? "active" : "coverflow"}`}>
                        coverflow
                    </div>
                    <div className={`${music ? "active" : "music"}`}>
                        Music
                    </div>
                    <div className={`${games ? "active" : "games"}`}>
                        Games
                    </div>
                    <div className={`${setting ? "active" : "setting"}`}>
                        Setting
                    </div>
                </div>
                <div className={`${musiclist ? "list-container" : "hide"}`}>
                    <div className={`${artist ? "active" : "artist"}`}>
                        Artist
                    </div>
                    <div className={`${songs ? "active" : "songs"}`}>
                        Songs
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Screen;