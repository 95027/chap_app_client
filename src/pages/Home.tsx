import { LuMessageSquareMore } from "react-icons/lu";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto flex h-full">
      <div className="bg-white w-full max-w-xs min-h-screen">
        <Sidebar />
      </div>
      <div className="bg-opacity-10 bg-primary flex-1 flex items-center justify-center">
        <div className="flex items-center text-primary justify-center">
          <p className="text-center font-bold">Select a user to.......&nbsp;</p>
          <p className="text-center text-xl mt-2">
            <LuMessageSquareMore />
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
