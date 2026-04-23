

import Bookings from "@/pages/user/Bookings";
import type { ISidebarItems } from "@/types";

export const userSidebarItems : ISidebarItems[] = [
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
