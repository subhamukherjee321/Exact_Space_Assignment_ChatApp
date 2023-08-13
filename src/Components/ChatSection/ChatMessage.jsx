import { useState } from "react";
import { Avatar,  } from "@material-tailwind/react";

const ChatMessage = ({ username, message, avatar }) => {
  const [likeCount, setLikeCount] = useState(0);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  return (
    <div className="flex flex-col gap-2 p-5 shadow-md rounded-r-lg bg-blue-gray-100 w-[360px]">
      <div>
        <p className="text-sm font-semibold">From:</p>
        <div className="mb-1 text-sm flex items-center">
          <Avatar src={avatar} className="mr-[5px]" />
          <div>
            <p>{username}</p>
          </div>

          <button
            onClick={handleLike}
            type="button"
            className="relative inline-flex items-center p-3 text-sm "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-thumbs-up text-blue-700"
            >
              <path d="M7 10v12" />
              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
            </svg>
            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-[10px] font-bold text-white bg-blue-700 border-2 border-white rounded-full -top-0 -right-0 dark:border-gray-900">
              {likeCount}
            </div>
          </button>
        </div>
      </div>
      <div className="w-full bg-white p-3 rounded-lg shadow-md flex flex-wrap ">
        <p className="leading-5">{message}</p>
     
      </div>
    </div>
  );
};

export default ChatMessage;
