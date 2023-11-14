import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Root } from "../components";
import {
  Home, Landing, MyStories, Profile, Story
} from "../pages";
import ProtectedRoutes from "./ProtectedRoutes";

export default function Routespath() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Landing />,
        },
        {
          path: "dashboard",
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: ":user/stories",
          element: (
            <ProtectedRoutes>
              <MyStories />
            </ProtectedRoutes> 
          ),
        },
        {
          path: "account/:user",
          element: (
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          ),
        },
        {
          path: "stories/:story",
          element: (
            <ProtectedRoutes>
              <Story />
            </ProtectedRoutes>
          ),
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
