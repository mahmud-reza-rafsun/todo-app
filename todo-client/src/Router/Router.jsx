import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Page/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";
import Login from "../Page/Authentication/Login/Login";
import SignUp from "../Page/Authentication/SignUp/SignUp";
import PrivetRoute from "./PrivetRoute";
import AddTodo from "../Page/AddTodo/AddTodo";
import MyTodo from "../Page/MyTodo/MyTodo";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/sign-up',
                element: <SignUp />
            },
            {
                path: '/',
                element: <PrivetRoute>
                    <Home />
                </PrivetRoute>,
                children: [
                    {
                        index: true,
                        element: <Navigate to="add-todo" replace />
                    },
                    {
                        path: "add-todo",
                        element: <AddTodo />
                    },
                    {
                        path: '/my-todo',
                        element: <MyTodo/>
                    }
                ]
            }
        ]
    }
]);

export default router;