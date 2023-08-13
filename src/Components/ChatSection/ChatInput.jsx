import React, { useState } from "react";
import EmojiPicker from "emoji-picker-react";
import { Input, Tooltip } from "@material-tailwind/react";

const ChatInput = ({ handleSend }) => {
  const [inputValue, setInputValue] = useState("");
  const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);

  const handleEmojiClick = (emojiObject) => {
    setInputValue((prevMsg) => prevMsg + emojiObject.emoji); // Append emoji to input
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
    <div className="flex gap-2 sm:gap-5 w-full py-5 items-center">
      <Tooltip content="Select Emoji">
        <button
          onClick={() => setIsEmojiPickerOpen(!isEmojiPickerOpen)}
          className="text-2xl"
        >
          😊
        </button>
      </Tooltip>
        {isEmojiPickerOpen && (
          <div className="w-full sm:w-auto">
            <EmojiPicker onEmojiClick={handleEmojiClick} />
          </div>
        )}

      <form
        action=""
        onSubmit={handleSubmit}
        className="flex gap-2 sm:gap-5 w-full justify-between items-center"
      >
        <Input
          type="text"
          color="blue"
          label="Type something..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="w-full"
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
