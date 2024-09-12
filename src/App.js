import './App.css';
import NowPlayingMovie from "./components/NowPlayingMovie";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ROUTES from "./router/router";


const router = createBrowserRouter([
    ...ROUTES,
])

function App() {
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
        <NowPlayingMovie/>
    </div>
  );
}

export default App;
