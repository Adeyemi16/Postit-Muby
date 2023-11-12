import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Error, Root } from "../components";
import {
  Home, Landing,
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
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}
