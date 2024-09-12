import {Outlet} from "react-router-dom";


const ROUTES = [
    {
        path: '/',
        element: <Outlet/>,
        children:[
            {
                path: 'home',
                element: <Home/>
            }
        ]
    }
]