import { useEffect, useState } from "react";
import { connectSocket, getSocket } from "../socket";
import { useAuth } from "../context/AuthContext";

const Messages = ({ selectedUser }: { selectedUser: any }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<any[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const socket = connectSocket(token || "");

    socket.on("getMessage", (data) => {
      setChat((pre) => [...pre, data]);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const socket = getSocket();
    socket.emit("sendMessage", {
      receiverId: selectedUser,
      message,
    });

    setChat((pre) => [
      ...pre,
      { senderId: currentUser._id, receiverId: selectedUser, message },
    ]);

    setMessage("");
  };

  return (
    <div className="bg-opacity-10 bg-primary flex-1 px-2">
      <div className="border h-64 overflow-y-auto">
        {chat.map((msg, i) => (
          <div key={i}>
            <b>{msg.senderId === currentUser._id ? "Me" : selectedUser}:</b>{" "}
            {msg.message}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="flex mt-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 flex-1"
        />
        <button type="submit" className="bg-blue-500 text-white px-4">
          Send
        </button>
      </form>
    </div>
  );
};

export default Messages;
