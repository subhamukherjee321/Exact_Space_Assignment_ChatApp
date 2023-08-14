import React from "react";
import ChatMessage from "./ChatMessage";

const ChatIem = ({ data }) => {
  return (
    <div className="py-5 h-[75vh] overflow-y-auto pl-10 rounded-r-lg">
      {data.length == 0 ? (
        <div className="text-center m-auto">
          <img
            className="m-auto"
            src="https://img.freepik.com/free-vector/conversation-concept-illustration_114360-1102.jpg"
            alt="start conversation"
          />
          <h1 className="text-xl mt-2 font-bold">Start A Conversation...</h1>
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default ChatIem;
