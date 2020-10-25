import React from 'react';

const GamesScreen = (props) => {
    
    const{gamesscreen} = props;
    return(

        <div className={`${gamesscreen ? "games-screen" : "hide"}`}>
          games
        </div>

    );


}
export default GamesScreen;