import React from "react";
import ChatOnline from "../components/chat/ChatOnline";
import Conversations from "../components/chat/Conversations";
import Message from "../components/chat/Message";
import "../css/chat.css";
import { AiOutlineSend } from "react-icons/ai";

const Chat = () => {
  return (
    <div className="messenger">
      <div className="chatMenu">
        <div className="chatMenuWrapper">
          <input placeholder="Search for friends" className="chatMenuInput" />
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
          <Conversations />
        </div>
      </div>
      <div className="chatBox">
        <div className="chatBoxWrapper">
          <div className="chatBoxTop">
            <Message message="This is my message" own={true} />
            <Message message="This is my message" own={true} />
            <Message
              message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consectetur facilis. Nemo quos ducimus, ullam laborum aliquid enim aspernatur quibusdam, vero iusto totam numquam tempore sunt dicta vitae, odit quod."
              own={false}
            />
            <Message message="This is my message" own={true} />
            <Message message="This is my message" own={false} />
            <Message message="This is my message" own={true} />
            <Message
              message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, consectetur facilis. Nemo quos ducimus, ullam laborum aliquid enim aspernatur quibusdam, vero iusto totam numquam tempore sunt dicta vitae, odit quod."
              own={true}
            />
            <Message message="This is my message" own={false} />
            <Message message="This is my message" own={true} />
            <Message message="This is my message" own={false} />
          </div>
          <div className="chatBoxBottom">
            <textarea
              className="chatMessageInput"
              placeholder="write something..."
            ></textarea>
            <button className="chatSubmitButton">
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
