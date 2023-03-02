import React, { useContext, useEffect, useState } from "react";
import ChatOnline from "../components/chat/ChatOnline";
import Conversations from "../components/chat/Conversations";
import Message from "../components/chat/Message";
import "../css/chat.css";
import { AiOutlineSend } from "react-icons/ai";
import { UserContext } from "../context/userState";

const Chat = () => {
  const userCtx = useContext(UserContext);
  const [conversation, setConversation] = useState([]);
  const [currConv, setcurrConv] = useState("");
  const [msg, setMsg] = useState([]);
  const [textMsg, setTextMsg] = useState("");

  const fetchConv = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/chat/find/`, {
      method: "GET",
      headers: {
        token: localStorage.getItem("token"),
      },
    });
    let json = await response.json();

    if (response.status === 200) {
      setConversation(json);
    } else {
      setConversation([]);
    }
  };

  const fetchMsg = async (id) => {
    const response = await fetch(
      `${process.env.REACT_APP_HOST}/chat/msg/${id}`,
      {
        method: "GET",
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    let json = await response.json();
    if (response.status === 200) {
      setMsg(json);
    } else {
      setMsg([]);
    }
  };

  const sendMsg = async () => {
    const response = await fetch(`${process.env.REACT_APP_HOST}/chat/msg/`, {
      method: "POST",
      headers: {
        token: localStorage.getItem("token"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        conversationId: currConv,
        sender: userCtx._id,
        text: textMsg,
      }),
    });
    let json = await response.json();
    console.log(json);
    // if (response.status === 200) {
    //   setMsg(json);
    // } else {
    //   setMsg([]);
    // }
    fetchMsg(currConv);
  };

  useEffect(() => {
    userCtx.fetchUser();
    fetchConv();
  }, []);

  useEffect(() => {}, []);

  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          {conversation.map((conv) => (
            <div
              key={conv._id}
              onClick={() => {
                setcurrConv(conv._id);
                fetchMsg(conv._id);
              }}
            >
              <Conversations conv={conv} user={userCtx.user} />
            </div>
          ))}
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            {msg &&
              msg.map((m) => (
                <Message
                  key={m._id}
                  message={m.text}
                  own={m.sender == userCtx._id}
                />
              ))}
          </div>
          <div className="chatBoxBottom">
            <textarea
              className="chatMessageInput"
              placeholder="write something..."
              value={textMsg}
              onChange={(e) => setTextMsg(e.target.value)}
            ></textarea>
            <button className="chatSubmitButton" onClick={sendMsg}>
              <AiOutlineSend size={"28px"} />
            </button>
          </div>
        </div>
      </div>

      <div className="chatOnline">
        <div className="chatOnlineWrapper">
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
          <ChatOnline />
        </div>
      </div>
    </div>
  );
};

export default Chat;
