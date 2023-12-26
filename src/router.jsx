import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import App from "./App";
import Layout from "./layout/layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Layout />,
        children: [
          {
            path: "/",
            element: <Dashboard />,
          },
        ],
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
