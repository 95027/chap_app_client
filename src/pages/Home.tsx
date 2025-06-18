import { useState } from "react";
import DefaultMessage from "../components/DefaultMessage";
import Sidebar from "../components/Sidebar";
import Messages from "../components/Messages";

const Home = () => {
  const [selectedUser, setSelectedUser] = useState<any>(null);

  return (
    <div className="max-w-6xl mx-auto flex min-h-96">
      <div className="bg-white w-full max-w-72">
        <Sidebar setSelectedUser={setSelectedUser} />
      </div>
      {selectedUser ? (
        <Messages selectedUser={selectedUser} />
      ) : (
        <DefaultMessage />
      )}
    </div>
  );
};

export default Home;
