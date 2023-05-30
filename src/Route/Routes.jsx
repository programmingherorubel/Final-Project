import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Pages/Layout";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";
import Login from "../Pages/Login";
import SingUp from "../Pages/SingUp";
import Demo from "../Components/Demo";
import RequiredRoute from "./RequiredRoute";
import DashbordLayout from "../Pages/DashbordLayout";
import MyCart from "../Pages/MyCart";
import AllUsers from "../Pages/AllUsers";

const routes = createBrowserRouter(
    [
        {
            path:'/',
            element:<Layout/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/menu',
                    element:<Menu/>
                },
                {
                    path:'/order/:category',
                    element:<Order/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/reg',
                    element:<SingUp/>
                },
                {
                    path:'/demo',
                    element:<RequiredRoute><Demo/></RequiredRoute>
                },
            ]
        },
        {
            path:'/dashbord',
            element:<RequiredRoute><DashbordLayout></DashbordLayout></RequiredRoute>,
            children:[
                {
                    path:'mycart',
                    element:<MyCart></MyCart>
                },
                {
                    path:'/dashbord/users',
                    element:<AllUsers></AllUsers>
                },
            ]
        }
    ]
)

export default routes