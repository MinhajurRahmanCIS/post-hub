import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import About from "../../pages/About/About";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Details from "../../pages/Media/Details";
import Media from "../../pages/Media/Media";
import Message from "../../pages/Message/Message";
import Register from "../../pages/Register/Register";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async () => fetch('https://post-hub-server.vercel.app/topPosts'),
                element: <Home></Home>,
            },
            {
                path: '/media',
                loader: async () => fetch('https://post-hub-server.vercel.app/posts'),
                element: <Media></Media>,
            },
            {
                path: '/about',
                loader: async () => fetch('https://post-hub-server.vercel.app/userProfile'),
                element: <PrivateRoute><About></About></PrivateRoute>,
            },
            {
                path: '/message',
                element: <PrivateRoute><Message></Message></PrivateRoute>,
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/register',
                element: <Register></Register>,
            },
            {
                path: '/details/:id',
                loader: ({params})=> fetch(`https://post-hub-server.vercel.app/posts/${params.id}`),
                element: <Details></Details>
            },
        ]

    }
])

export default router;