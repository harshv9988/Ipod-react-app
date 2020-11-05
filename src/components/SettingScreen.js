import React from "react";
import reacticon from "../assets/react-icon.png";

const SettingScreen = (props) => {
  const { settingscreen } = props;
  return (
    <div className={`${settingscreen ? "setting-screen" : "hide"}`}>
      {/* --------------------------------setting screen display image and author name-------------------------------------- */}
      <div className="display-screen black-display">
        <div className="tool">
          <img src={reacticon} alt="reacticon" />
        </div>
        <div className="author">Made by Harsh Verma</div>
      </div>
    </div>
  );
};
export default SettingScreen;
