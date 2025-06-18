import { FaUsers } from "react-icons/fa";
import blank_user from "../../public/blank_user.jpg";
import { useEffect, useState } from "react";
import axiosInstance from "../axiosInstance";

const Sidebar = ({ setSelectedUser }: { setSelectedUser: any }) => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    try {
      const res = await axiosInstance.get("/user");

      if (res.data) {
        setUsers(res.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div className="h-full overflow-y-auto">
      <div className="space-y-1 p-2 flex items-center justify-center">
        <span className="text-2xl text-blue-950">
          <FaUsers />
        </span>
      </div>
      <ul className="space-y-2 p-4">
        {users?.map((user: any) => {
          return (
            <li
              key={user?._id}
              className={`bg-white rounded shadow cursor-pointer font-medium flex items-center justify-center text-primary`}
              onClick={() => setSelectedUser(user?._id)}
            >
              <span className="w-[40px]">
                <img src={blank_user} alt="user" />
              </span>
              {user?.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
