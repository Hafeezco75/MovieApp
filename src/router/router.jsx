import NowPlayingMovie from "../components/NowPlayingMovie";
import Layout from "../layout/Layout";
import SignUp from "../app/auth/SignUp";
import Login from "../app/auth/Login";
import TopRated from "../app/auth/TopRated";
import TopRatedMovie from "../components/TopRatedMovie";


const ROUTES = [
    {
        path: '/',
        element: <Layout/>,
        children:[
            {
                path: '/',
                element: <NowPlayingMovie/>
            },
            {
                path: '/',
                element: <TopRatedMovie/>
            }
        ]
    },
    {
        path: '/Signup',
        element: <SignUp/>
    },
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/topRated",
        element: <TopRated/>
    }
]


export default ROUTES;