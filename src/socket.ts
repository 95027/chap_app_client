import { io, Socket } from "socket.io-client";

let socket: Socket;

export const connectSocket = (token: string) => {
  socket = io(import.meta.env.VITE_SOCKET_URL, {
    withCredentials: true,
    auth: {
      token,
    },
  });
  return socket;
};

export const getSocket = () => socket;
