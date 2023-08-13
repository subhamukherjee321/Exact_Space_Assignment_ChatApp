import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from "react-icons/ai";
import SideBarItems from "./SidebarItems";
import { user_list } from "../../Data/userList";

export default function SideBar({ navSize, changeNavSize, handleClick, user }) {
  return (
    <div
      className={`${
        navSize === "small" ? "w-[65px]" : "w-[240px]"
      } bg-white min-h-[100vh] flex flex-col fixed top-0 left-0 z-[100] pt-[10px] transition-all duration-300 ease`}
    >
      <div
        className={`w-full flex flex-col ${
          navSize === "large" ? "items-start" : "items-center"
        }  px-[11px]`}
      >
        <div
          className={`w-full flex ${
            navSize === "small" ? "justify-center" : "justify-between"
          } items-center px-[10px] rounded-md BGColor py-3`}
        >
          <div className={`${navSize === "small" ? "hidden" : "block"}`}>
            <p>Users</p>
          </div>

          <button
            onClick={() => {
              navSize === "small"
                ? changeNavSize("large")
                : changeNavSize("small");
            }}
          >
            {navSize === "small" ? (
              <AiOutlineDoubleRight size={20} color="black" />
            ) : (
              <AiOutlineDoubleLeft size={20} color="black" />
            )}
          </button>
        </div>

        <div className={`w-full flex flex-col gap-5  mt-[35px]`}>
          {user_list?.map((ele) => (
            <SideBarItems
              key={ele.id}
              navSize={navSize}
              icon={ele.icon}
              title={ele.title}
              handleClick={handleClick}
              user={user}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
