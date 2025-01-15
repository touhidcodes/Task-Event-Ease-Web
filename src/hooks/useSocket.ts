// hooks/useSocket.ts
import { useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

const SOCKET_URL = `${process.env.NEXT_PUBLIC_BACKEND_URL}`;

export const useSocket = () => {
  const [socket, setSocket] = useState<Socket | null>(null);

  useEffect(() => {
    const socketInstance = io(SOCKET_URL);

    socketInstance.on("connect", () => {
      console.log("Connected to the server:", socketInstance.id);
    });

    socketInstance.on("disconnect", () => {
      console.log("Disconnected from the server");
    });

    setSocket(socketInstance);

    return () => {
      socketInstance.disconnect(); // Cleanup socket connection on unmount
    };
  }, []);

  return { socket };
};
