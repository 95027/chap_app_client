import { FaUsers } from "react-icons/fa";
import user from "../../public/blank_user.jpg";

const Sidebar = () => {
  return (
    <div className="h-full min-h-screen overflow-y-auto">
      <div className="space-y-1 p-2 flex items-center justify-center">
        <span className="text-2xl text-blue-950">
          <FaUsers />
        </span>
      </div>
      <ul className="space-y-2 p-4">
        <li className="bg-white rounded shadow cursor-pointer font-medium flex items-center justify-center text-primary">
          <span className="w-[40px]">
            <img src={user} alt="user" />
          </span>
          User 1
        </li>
        <li className="bg-white rounded shadow cursor-pointer font-medium flex items-center justify-center text-primary">
          <span className="w-[40px]">
            <img src={user} alt="user" />
          </span>
          User 1
        </li>
        <li className="bg-white rounded shadow cursor-pointer font-medium flex items-center justify-center text-primary">
          <span className="w-[40px]">
            <img src={user} alt="user" />
          </span>
          User 1
        </li>
        <li className="bg-white rounded shadow cursor-pointer font-medium flex items-center justify-center text-primary">
          <span className="w-[40px]">
            <img src={user} alt="user" />
          </span>
          User 1
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
