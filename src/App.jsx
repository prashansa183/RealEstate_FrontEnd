import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/homePage";
import SinglePage from "./routes/homePage/singlePage/singlePage";
import Register from "./routes/homePage/register/register";
import Profile from "./routes/homePage/profile/profile";

import ListPage from "./routes/homePage/listPage/listPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./routes/homePage/layout/layout";
import Login from "./routes/homePage/login/login";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,

      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/list",
          element: <ListPage />,
        },
        {
          path: "/register",
          element: < Register/>,
        },
        {
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        },
        {
          path: "/login",
          element: <Login/>,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
