import React, { useEffect, useState } from "react";

const Conversations = ({ conv, user }) => {
  const [username, setUsername] = useState("");
  // console.log(conv, user._id);
  const fetchUser = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/user/${id}`, {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    let json = await response.json();
    if (response.status === 200) {
      setUsername(json.username);
    } else {
      setUsername("");
    }
  };
  useEffect(() => {
    const receiverId = conv.members.find((member) => member !== user._id);
    fetchUser(receiverId);
  }, []);

  return (
    <div className="conversation">
      <img
        className="conversationImg"
        src="https://www.pngkey.com/png/full/72-729716_user-avatar-png-graphic-free-download-icon.png"
        alt=""
      />
      <span className="conversationName">{username}</span>
    </div>
  );
};

export default Conversations;
