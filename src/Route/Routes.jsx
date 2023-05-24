import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Layout from "../Pages/Layout";
import Menu from "../Pages/Menu";

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
            ]
        }
    ]
)

export default routes