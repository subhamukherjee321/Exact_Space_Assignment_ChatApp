import React from "react";
import ChatMessage from "./ChatMessage";

const ChatIem = ({ data }) => {
  return (
    <div className="py-5 min-h-max overflow-y-auto pl-10 rounded-r-lg">
      <div className="flex flex-col gap-5">
        {data.map((msg) => (
          <ChatMessage
            key={msg.id}
            username={msg.username}
            message={msg.message}
            avatar={msg.avatar}
          />
        ))}
      </div>
    </div>
  );
};

export default ChatIem;