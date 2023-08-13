import { useState } from "react";
import Navbar from "./Components/Navbar";
// import ChatApp from "./Components/Chat/ChatApp";
import { user_list } from "./Data/userList";
import SideBar from "./Components/Sidebar/Sidebar";

const App = () => {
  const [navSize, changeNavSize] = useState("small");
  const [user, setUser] = useState(user_list[0]);

  const handleClick = (value) => {
    setUser(value);
  };

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9]">
      {/* Desktop: Sidebar and Content */}
      <div
        className={`grid ${
          navSize === "small" ? "grid-cols-[75px,1fr]" : "grid-cols-[240px,1fr]"
        } transition-all duration-300 ease`}
      >
        <div>
          <SideBar
            navSize={navSize}
            handleClick={handleClick}
            user={user}
            changeNavSize={changeNavSize}
          />
        </div>
        <div>
          <Navbar />
          {/* <div className="w-full py-6 px-8">
            <ChatApp user={user} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default App;
