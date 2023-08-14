import React, { useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { Input, Tooltip } from "@material-tailwind/react";
import { user_list } from "../../Data/userList";

const ChatInput = ({ handleSend }) => {
  const [inputValue, setInputValue] = useState("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
  const [mention, setMention] = useState(false);
  const ref = useRef(null);

  const handleEmojiClick = (emojiObject) => {
    setInputValue((prevMsg) => prevMsg + emojiObject.emoji);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);

    if (e.target.value.includes("@")) {
      const query = e.target.value.split("@")[1].toLowerCase();
      const matchedMentions = user_list.filter((user) =>
        user.title.toLowerCase().includes(query)
      );
      if (matchedMentions.length > 0) {
        setMention(true);
      }
    } else {
      setMention(false);
    }
  };

  const handleMention = (value) => {
    setInputValue((prev) => `${prev}${value}`);
    setMention(false);
    console.log(ref.current);
    ref.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      handleSend(inputValue);
    }
    setInputValue("");
    setIsEmojiPickerOpen(false);
  };

  return (
    <div className="flex gap-2 sm:gap-5 w-full py-5 px-5 items-center relative">
      <Tooltip content="Select Emoji">
        <button
          onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
          className="text-2xl border-2 rounded-full bg-blue-gray-100 p-[4px]"
        >
          😊
        </button>
      </Tooltip>
      {isEmojiPickerOpen && (
        <div className="w-full sm:w-auto h-auto absolute bottom-20">
          <EmojiPicker
            onEmojiClick={handleEmojiClick}
          />
        </div>
      )}

      {mention && (
        <div className="text-center p-[4px] absolute bottom-20 shadow-2xl">
          {user_list.map((ele, i) => (
            <div
              key={i}
              className="m-[4px] text-sm p-[4px] border-b border-gray-500 hover:bg-blue-gray-100 cursor-pointer"
              onClick={() => handleMention(ele.title)}
            >
              {ele.title}
            </div>
          ))}
        </div>
      )}

      <form
        action=""
        onSubmit={handleSubmit}
        className="flex gap-2 sm:gap-5 w-full justify-between items-center"
      >
        <input
          type="text"
          color="blue"
          placeholder="Type something..."
          value={inputValue}
          onChange={handleChange}
          className="w-full border border-black p-[5px] rounded-lg pl-4 placeholder-gray-600"
          ref={ref}
        />

        <Tooltip content="Send Message">
          <button type="submit" className="mt-2 sm:mt-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-send-horizonal"
            >
              <path d="m3 3 3 9-3 9 19-9Z" />
              <path d="M6 12h16" />
            </svg>
          </button>
        </Tooltip>
      </form>
    </div>
  );
};

export default ChatInput;
