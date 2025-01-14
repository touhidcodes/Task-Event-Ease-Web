import { Box, List, Stack, Typography } from "@mui/material";
import Image from "next/image";
import assets from "@/assets";
import Link from "next/link";
import { drawerItems } from "@/utils/drawerItems";
import { UserRole } from "@/types";
import SideBarItem from "./SideBarItem";
import useUserInfo from "@/hooks/useUserInfo";

const SideBar = () => {
  const user = useUserInfo();
  const userRole = user?.role || "";

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
