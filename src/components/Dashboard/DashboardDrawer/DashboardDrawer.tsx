"use client";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SideBar from "../SideBar/SideBar";
import {
  Avatar,
  Badge,
  Button,
  ClickAwayListener,
  FormControl,
  Menu,
  MenuItem,
  Modal,
  Popper,
  Select,
  Stack,
} from "@mui/material";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import {
  useGetSingleUserQuery,
  useGetUserWithProfileQuery,
} from "@/redux/api/userApi";
import { useRef, useState } from "react";
import EventIcon from "@mui/icons-material/Event";
import { styled } from "@mui/material/styles";
import { logoutUser } from "@/services/actions/logoutUser";
import { useRouter } from "next/navigation";

const drawerWidth = 300;

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const DashboardDrawer = ({ children }: { children: React.ReactNode }) => {
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const { data, isLoading } = useGetSingleUserQuery({});
  const { data: userProfile } = useGetUserWithProfileQuery({});

  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleToggle = () => setOpen((prev) => !prev);
  const handleClose = () => setOpen(false);
  const router = useRouter();

  const handleLogOut = async () => {
    setIsLoggingOut(true);
    await logoutUser();
    router.push("/");
  };

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };

  const placeholder =
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde";

  return (
    <Box sx={{ display: "flex", backgroundColor: "#EBF0F4", height: "full" }}>
      {/* <CssBaseline /> */}
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          background: "#EBF0F4",
          boxShadow: 0,
          py: 1,
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "secondary.main" }} />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <Box>
              <Typography
                variant="body2"
                noWrap
                sx={{ color: "rgba(11, 17, 52, 0.6)" }}
              >
                Hi, {isLoading ? "Loading..." : data?.username}
              </Typography>
              <Typography variant="h6" noWrap sx={{ color: "#00026E" }}>
                Welcome to Event Ease
              </Typography>
            </Box>
            <Stack direction="row" gap={3} alignItems="center">
              <Badge badgeContent={1} color="primary">
                <IconButton sx={{ background: "#ffffff" }}>
                  <NotificationsNoneIcon color="action" />
                </IconButton>
              </Badge>

              {/* Avatar that triggers the dropdown */}
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar
                  alt="John Doe"
                  src={userProfile?.image || placeholder}
                  ref={anchorRef}
                  onClick={handleToggle}
                  style={{ cursor: "pointer" }}
                />
              </StyledBadge>

              {/* Popper */}
              <Popper
                open={open}
                anchorEl={anchorRef.current}
                placement="bottom-start"
                disablePortal
                modifiers={[
                  {
                    name: "offset",
                    options: {
                      offset: [0, 10],
                    },
                  },
                ]}
                style={{ zIndex: 1300 }}
              >
                <ClickAwayListener onClickAway={handleClose}>
                  <Box
                    sx={{
                      width: 250,
                      bgcolor: "background.paper",
                      boxShadow: 3,
                      borderRadius: 2,
                      p: 2,
                      textAlign: "center",
                    }}
                  >
                    {/* Avatar */}
                    <Avatar
                      src={userProfile?.image || placeholder}
                      alt={userProfile?.username}
                      sx={{ width: 60, height: 60, mx: "auto", mb: 1 }}
                    />

                    {/* Username */}
                    <Typography variant="h6" sx={{ mb: 0.5 }}>
                      {userProfile?.username}
                    </Typography>

                    {/* Email */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mb: 2 }}
                    >
                      {userProfile?.email}
                    </Typography>

                    {/* Logout Button */}
                    <Button
                      variant="contained"
                      fullWidth
                      onClick={handleLogOut}
                      sx={{
                        backgroundColor: "#0B1134",
                        color: "white",
                        padding: "10px",
                        "&:hover": {
                          backgroundColor: "#061022",
                        },
                      }}
                    >
                      Logout
                    </Button>
                  </Box>
                </ClickAwayListener>
              </Popper>
              {/* Create Event Button */}
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Button
                  variant="contained"
                  startIcon={<EventIcon />}
                  sx={{
                    backgroundColor: "#0B1134",
                    color: "white",
                    padding: "10px",
                    "&:hover": {
                      backgroundColor: "#061022",
                    },
                  }}
                  fullWidth
                >
                  Create Event
                </Button>
              </Box>
              {/* <AccountMenu /> */}
            </Stack>
          </Box>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          <SideBar />
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          <SideBar />
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Box
          style={{
            backgroundColor: "#EBF0F4",
            minHeight: "100vh",
            width: "100%",
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default DashboardDrawer;
