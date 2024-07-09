import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

const Sidebar = () => {
  return (
    <div className="w-full flex items-center gap-3">
      <LeftSidebar />
      <RightSidebar />
    </div>
  );
};

export default Sidebar;
