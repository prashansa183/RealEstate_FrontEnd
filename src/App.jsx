import Navbar from "./components/navbar/Navbar";
import HomePage from "./routes/homePage/homePage";
import SinglePage from "./routes/homePage/singlePage/singlePage";
import Profile from "./routes/homePage/profile/profile";

import ListPage from "./routes/homePage/listPage/listPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./routes/homePage/layout/layout";

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
          path: "/:id",
          element: <SinglePage />,
        },
        {
          path: "/profile",
          element: <Profile />,
        }
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
