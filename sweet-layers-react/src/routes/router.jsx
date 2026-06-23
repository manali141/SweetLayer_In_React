import { createBrowserRouter } from "react-router-dom";

import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Cakes from "../pages/Cakes";
import CakeDetails from "../pages/CakeDetails";
import OrderCake from "../pages/OrderCake";
import MyOrders from "../pages/MyOrders";
import CreateCake from "../pages/CreateCake";
import Profile from "../pages/Profile";
import NotFound from "../pages/NotFound";
import Menu from "../pages/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Menu",
        element: <Menu />
      },
      {
        path: "/cakes",
        element: <Cakes />
      },
      {
        path: "/cakes/:id",
        element: <CakeDetails />
      },
      {
        path: "/order/:cakeId",
        element: <OrderCake />
      },
      {
        path: "/my-orders",
        element: <MyOrders />
      },
      {
        path: "/create-cake",
        element: <CreateCake />
      },
      {
        path: "/profile",
        element: <Profile />
      },
      {
        path: "*",
        element: <NotFound />
      }
    ]
  }
]);

export default router;