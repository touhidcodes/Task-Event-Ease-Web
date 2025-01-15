import { Box, List, Typography } from "@mui/material";

import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SideBarItem from "./SideBarItem";
import useUserInfo from "@/hooks/useUserInfo";
import { useEffect, useState } from "react";

const SideBar = () => {
  const userInfoPromise = useUserInfo();
  const [userRole, setUserRole] = useState<string>("");
  useEffect(() => {
    const fetchUserInfo = async () => {
      const userInfo = await userInfoPromise;
      if (userInfo) {
        setUserRole(userInfo.role || "");
      }
    };

    fetchUserInfo();
  }, [userInfoPromise]);

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
