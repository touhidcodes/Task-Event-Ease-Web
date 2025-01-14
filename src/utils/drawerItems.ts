import { DrawerItem, UserRole } from "@/types";

//icons
import EditCalendarIcon from "@mui/icons-material/EditCalendar";
import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import EventAvailableIcon from "@mui/icons-material/EventAvailable";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ReviewsIcon from "@mui/icons-material/Reviews";
import EventIcon from "@mui/icons-material/Event";
import EventNoteIcon from "@mui/icons-material/EventNote";
import { USER_ROLE } from "@/constants/role";

export const drawerItems = (role: UserRole): DrawerItem[] => {
  const roleMenus: DrawerItem[] = [];

  const defaultMenus = [
    {
      title: "Home",
      path: `home`,
      icon: DashboardIcon,
    },
    {
      title: "Events",
      path: `events`,
      icon: EventIcon,
    },
    {
      title: "Create Event",
      path: `create`,
      icon: EditCalendarIcon,
    },
  ];

  switch (role) {
    case USER_ROLE.ADMIN:
      roleMenus.push(
        {
          title: "Attendees",
          path: `attendees`,
          icon: GroupIcon,
        },
        {
          title: "Users",
          path: `users`,
          icon: PersonIcon,
        }
      );
      break;

    case USER_ROLE.USER:
      roleMenus.push(
        {
          title: "My Events",
          path: `my-events`,
          icon: EventNoteIcon,
        },
        {
          title: "Booked Events",
          path: `booked`,
          icon: EventAvailableIcon,
        }
      );
      break;

    default:
      break;
  }

  return [...defaultMenus, ...roleMenus];
};
