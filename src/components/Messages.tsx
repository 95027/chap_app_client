import { useEffect, useState } from "react";
import { connectSocket, getSocket } from "../socket";
import { useAuth } from "../context/AuthContext";

const Messages = ({ selectedUser }: { selectedUser: any }) => {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState<any[]>([]);
  const { currentUser } = useAuth();

  useEffect(() => {
    const socket = connectSocket();

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
      <div className="border h-64 overflow-y-auto p-2 flex flex-col gap-2">
        {chat.map((msg, i) => {
          const isSender = msg.senderId === currentUser._id;
          return (
            <div
              key={i}
              className={`flex ${isSender ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-xs px-4 py-2 rounded-lg ${
                  isSender
                    ? "bg-blue-500 text-white rounded-br-none"
                    : "bg-gray-200 text-black rounded-bl-none"
                }`}
              >
                <span className="block text-sm">{msg.message}</span>
              </div>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit} className="flex mt-2 gap-2">
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="border p-2 flex-1 rounded"
          placeholder="Type a message..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 rounded">
          Send
        </button>
      </form>
    </div>
  );
};

export default Messages;
