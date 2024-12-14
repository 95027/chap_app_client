import { NavLink } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { CgLogOut } from "react-icons/cg";

const Header = () => {
  const { currentUser, logout } = useAuth();
  return (
    <div className="shadow-md flex items-center justify-center p-5 mb-5">
      <h2 className="text-2xl font-bold font-serif text-blue-950 text-nowrap">
        <NavLink to={"/"}>Chat App</NavLink>
      </h2>
      <div className="flex items-center justify-end w-full">
        {currentUser ? (
          <button onClick={logout} className="text-2xl"> <CgLogOut/></button>
        ) : (
          <NavLink to={"login"} className="text-2xl"><CgLogOut/></NavLink>
        )}
      </div>
    </div>
  );
};

export default Header;
