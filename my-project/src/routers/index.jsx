import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import Home from "../pages/Home";
import Layout from "../components/Layout";

const router = createBrowserRouter([
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
