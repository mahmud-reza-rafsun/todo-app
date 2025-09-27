import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Login from "../Page/Authentication/Login/Login";
import SignUp from "../Page/Authentication/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/sign-up',
                element: <SignUp/>
            },
            {
                path: '/',
                element: <PrivetRoute>
                    <Home />
                </PrivetRoute>
            }
        ]
    }
]);

export default router;