import { Box, List, Typography } from "@mui/material";

import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SideBarItem from "./SideBarItem";
import useUserInfo from "@/hooks/useUserInfo";
import { useEffect, useState } from "react";

import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // Replace with your server's URL and port

socket.on("connect", () => {
  console.log("Connected to the server:", socket.id);
});

socket.on("disconnect", () => {
  console.log("Disconnected from the server");
});

socket.on("new_attendee", (data) => {
  console.log("New Attendee Notification:", data.message);
  // showNotification(data.message); // Function to display the notification
});

const SideBar = () => {
  const [userRole, setUserRole] = useState<string>("");
  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await useUserInfo();

      if (userInfo) {
        setUserRole(userInfo.role || "");
      }
    };

    fetchUserInfo();
  }, []);

  return (
    <Box style={{ height: "100vh" }}>
      <Box sx={{ background: "#0B1134CC", top: 0 }}>
        <Typography
          variant="h5"
          fontWeight={500}
          style={{ color: "#fff", padding: "20px 0px", textAlign: "center" }}
        >
          Event Ease
        </Typography>
      </Box>

      <List sx={{ paddingLeft: "20px" }}>
        {drawerItems(userRole as UserRole).map((item, index) => (
          <SideBarItem key={index} item={item} />
        ))}
      </List>
    </Box>
  );
};

export default SideBar;
