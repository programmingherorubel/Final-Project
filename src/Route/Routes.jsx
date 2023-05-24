import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Pages/Layout";
import Menu from "../Pages/Menu";
import Order from "../Pages/Order";

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
                    path:'/order',
                    element:<Order/>
                },
            ]
        }
    ]
)

export default routes