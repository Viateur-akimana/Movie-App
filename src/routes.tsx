import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Error from "./pages/Error";
import Movies from "./pages/Movies";
import Bookmark from "./pages/Bookmark";
import TvSeries from "./pages/TvSeries";

export const router = createBrowserRouter([
    
    {
        path:"/",
        element:<Home/>,
        errorElement:<Error/>
    },{
        path:"/movies",
        element:<Movies/>,
        errorElement:<Error/>
    },
    {
        path:"/bookmarks",
        element:<Bookmark/>,
        errorElement:<Error/>
    },
    {
        path:"/tv-series",
        element:<TvSeries/>,
        errorElement:<Error/>
    }
])