import { createBrowserRouter } from "react-router";
import Root from "../LayOut.jsx/Root";
import Home from "../Pages/Home";
import PetSupplies from "../Pages/PetSupplies";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";
import MyListing from "../Pages/MyListing";
import AddListing from "../Pages/AddListing";
import MyOrders from "../Pages/MyOrders";
import PrivateRoute from "../PrivateRouter/PrivateRoute";

export let router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/petSupplies",
        Component: PetSupplies,
      },
      {
        path: "/login",
        Component: Login,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/myListing",
        element: (
          <PrivateRoute>
            <MyListing />
          </PrivateRoute>
        )
      },
      {
        path: "/addListing",
        element: (
          <PrivateRoute>
            <AddListing />
          </PrivateRoute>
        ),
        loader: async () => {
          const response = await fetch("http://localhost:3000/allpets");
          if (!response.ok) {
            throw new Error("Failed to fetch pets data");
          }
          const data = await response.json();
          return data;
        },
      },
      {
        path: "/myOrders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/*",
    Component: Error,
  },
]);
