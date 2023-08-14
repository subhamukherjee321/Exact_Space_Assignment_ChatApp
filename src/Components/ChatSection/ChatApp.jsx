import React, { useState } from "react";
import ChatItem from "./ChatIem";
import ChatInput from "./ChatInput";
import { user_list } from "../../Data/userList";
import { AppState } from "../../Context/AppContext";

const ChatApp = () => {
  const [data, setData] = useState([]);
  const {user} = AppState();

  const handleSend = (message) => {
    let userdata = user
      ? user
      : user_list[Math.floor(Math.random() * user_list.length)];
    const newMessage = {
      id: Math.random(Date.now()),
      username: userdata.title,
      avatar: userdata.icon,
      message,
    };

    setData([...data, newMessage]);
  };

  return (
    <div className="flex flex-col justify-between item-center w-full h-[85.5vh] bg-[#EDF1F5] rounded-md">
      <ChatItem data={data} />
      <ChatInput handleSend={handleSend} />
    </div>
  );
};

export default ChatApp;
