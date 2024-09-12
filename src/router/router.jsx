import {Outlet} from "react-router-dom";
import NowPlayingMovie from "../components/NowPlayingMovie";
import Layout from "../layout/Layout";


const ROUTES = [
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <NowPlayingMovie/>
            }
        ]
    },
    {
        //path: '/signup',
        //element: <SignUp/>
    }
]


export default ROUTES;