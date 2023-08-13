import { Avatar } from "@material-tailwind/react";

const SideBarItems = ({ icon, title, navSize, handleClick, user }) => {
  return (
    <div
      onClick={() => handleClick({ title, icon })}
      className={`w-full flex gap-[20px] items-center rounded-md ${
        navSize === "small" ? "justify-center" : "justify-start"
      } ${
        navSize === "small" ? "px-[0px]" : "px-[20px]"
      } cursor-pointer py-[5px] ${navSize === "large" && "hoverBGColor"} ${
        title === user.title ? "BGColor" : null
      }`}
    >
      <Avatar
        size="md"
        alt="User-1"
        src={icon}
        className="border border-green-500 shadow-xl shadow-green-900/20 ring-4 ring-green-500/30"
      />
      <div className={`${navSize === "small" ? "hidden" : "block"}`}>
        <p className="text-black font-medium">
          {title}
        </p>
      </div>
    </div>
  );
};

// SideBarItems.propTypes = {
//   icon: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   navSize: PropTypes.string.isRequired,
//   handleClick: PropTypes.func.isRequired,
//   user: PropTypes.object.isRequired,
// };

export default SideBarItems;
