import './App.css';
import NowPlayingMovie from "./components/NowPlayingMovie";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ROUTES from "./router/router";
import TopRatedMovie from "./components/TopRatedMovie";


const router = createBrowserRouter([
    ...ROUTES,
])

function App() {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
        <NowPlayingMovie/>
        <TopRatedMovie/>
    </div>
  );
}

export default App;
