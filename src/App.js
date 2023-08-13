import { useState } from "react";
import Navbar from "./Components/Navbar";
import SideBar from "./Components/Sidebar/Sidebar";
import ChatApp from "./Components/ChatSection/ChatApp";

const App = () => {
  const [navSize, changeNavSize] = useState("small");
  const [user, setUser] = useState("");

  const handleClick = (value) => {
    console.log('value: ', value);
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
          <ChatApp user={user} />
        </div>
      </div>
    </div>
  );
};

export default App;
