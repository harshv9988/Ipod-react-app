import React from 'react';

const CoverflowScreen = (props) => {
    const {coverflowscreen} = props
    return(

        <div className={`${coverflowscreen ? "coverflow-screen" : "hide"}`}>
          coverflow
        </div>

    );


}
export default CoverflowScreen;