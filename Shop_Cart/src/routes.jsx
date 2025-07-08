import {createBrowserRouter} from "react-router-dom"
import App from "./App/App"
import { Home } from "./Home/Home"
import { Cart } from "./Cart/Cart"
import {All} from './Home/All'
import {Electronics} from './Home/Electronics'
import {Men} from './Home/Men'
import {Women} from './Home/Women'
import {Jewelery} from './Home/Jewelery'
import { NotFound } from "./Home/NotFound"
import { Navigate } from "react-router-dom"
export const router=createBrowserRouter([
    {
        path:'/',
        element:<App />,
        errorElement:<NotFound />,
        children:[
            {path:'home',element:<Home />,
                children:[
                    {index:true,element:<Navigate to="all" replace/>},
                    {path:'all',element:<All />},
                    {path:'men',element:<Men />},
                    {path:'jewelery',element:<Jewelery />},
                    {path:'electronics',element:<Electronics />},
                    {path:'women',element:<Women />},
                ]
            },{path:'cart',element:<Cart />},
        ]
    },
])