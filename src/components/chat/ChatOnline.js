import React from "react";

const ChatOnline = ({ name }) => {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            className="chatOnlineImg"
            src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"
            alt=""
          />
          <div className="chatOnlineBadge"></div>
        </div>
        <span className="chatOnlineName">{name}</span>
      </div>
    </div>
  );
};

export default ChatOnline;
