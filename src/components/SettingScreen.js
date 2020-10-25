import React from 'react';

const SettingScreen = (props) => {
    const {settingscreen} = props;
    return(

        <div className={`${settingscreen ? "setting-screen" : "hide"}`}>
          setting
        </div>

    );


}
export default SettingScreen;