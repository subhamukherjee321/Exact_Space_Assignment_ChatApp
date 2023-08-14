import Navbar from "./Components/Navbar";
import SideBar from "./Components/Sidebar/Sidebar";
import ChatApp from "./Components/ChatSection/ChatApp";
import { AppState } from "./Context/AppContext";

const App = () => {
  const {navSize} = AppState();

  return (
    <div className="w-full min-h-screen bg-[#f9f9f9]">
      <div
        className={`grid ${
          navSize === "small" ? "grid-cols-[75px,1fr]" : "grid-cols-[240px,1fr]"
        } transition-all duration-300 ease`}
      >
        <div>
          <SideBar />
        </div>
        <div>
          <Navbar />
          <ChatApp />
        </div>
      </div>
    </div>
  );
};

export default App;
