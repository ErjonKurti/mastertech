import React from "react";
import "./ChatButton.css";
import { BsChatDotsFill } from "react-icons/bs";

const ChatButton = () => {
  return (
    <a
      href="http://mastertech-chat.vercel.app"
      target="_blank"
      rel="noopener noreferrer"
      className="chat-button"
    >
      <BsChatDotsFill className="chat-icon" />
    </a>
  );
};

export default ChatButton;
