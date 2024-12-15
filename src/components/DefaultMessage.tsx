import { LuMessageSquareMore } from "react-icons/lu";

const DefaultMessage = () => {
  return (
    <div className="bg-opacity-10 bg-primary flex-1 flex items-center justify-center">
      <div className="flex items-center text-primary justify-center">
        <p className="text-center font-bold">Select a user to.......&nbsp;</p>
        <p className="text-center text-xl mt-2">
          <LuMessageSquareMore />
        </p>
      </div>
    </div>
  );
};

export default DefaultMessage;
