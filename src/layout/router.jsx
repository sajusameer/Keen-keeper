import { createBrowserRouter } from "react-router-dom";
// Change these lines:
import RootLayout from "./RootLayout"; // This one is fine because it's in the same folder
import Home from "../pages/homepage/Home";
import Timeline from "../pages/Timeline/Timeline";
import Stats from "../pages/Stats/Stats";
import FriendDetails from "../pages/FriendDetails/FriendDetails";
import NotFound from "../pages/NotFound/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "timeline",
        element: <Timeline />
      },
      {
        path: "stats",
        element: <Stats />
      },
      {
        path: "friend/:id",
        element: <FriendDetails />
      }
    ]
  },

  // 👇 THIS is real 404 route
  {
    path: "*",
    element: <NotFound />
  }
]);