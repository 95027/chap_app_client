import { io, Socket } from "socket.io-client";

let socket: Socket;

export const connectSocket = () => {
  socket = io(import.meta.env.VITE_SOCKET_URL, {
    withCredentials: true,
  });

  socket.on("connect_error", (err) => {
    console.log("Socket connection error", err);
  });
  return socket;
};

export const getSocket = () => socket;
