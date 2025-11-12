import { createBrowserRouter } from "react-router";
import Root from "../LayOut.jsx/Root";
import Home from "../Pages/Home";
import PetSupplies from "../Pages/PetSupplies";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Error from "../Pages/Error";

export let router = createBrowserRouter([
    {
        path:"/",
        Component:Root,
        children:[
            {
                index: true, 
                Component:Home
            },
            {
                path:"/petSupplies",
                Component:PetSupplies
            },
            {
                path:"/login",
                Component:Login,
            },
            {
                path:"/register",
                Component:Register
            }
        ],
    },
    {
        path:"/*",
        Component: Error
    }
])