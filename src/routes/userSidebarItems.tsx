

import Bookings from "@/pages/user/Bookings";
import MyProfile from "@/pages/user/MyProfile";

import type { ISidebarItems } from "@/types";

export const userSidebarItems : ISidebarItems[] = [
  {
    title: "Dashboard",
    items: [
      {
        title: "My Profile",
        url: "/user/profile",
        component: MyProfile,
      },
    ],
  },
  {
    title: "History",
    items: [
      {
        title: "Bookings",
        url: "/user/bookings",
        component: Bookings,
      },
    ],
  },

];
