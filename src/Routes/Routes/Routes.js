import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home/Home";
import Media from "../../pages/Media/Media";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/media',
                element: <Media></Media>,
            },
            {
                path: '/about',
                element: <About></About>,
            },
        ]

    }
])

export default router;