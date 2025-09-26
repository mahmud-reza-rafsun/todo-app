import { createBrowserRouter } from "react-router-dom";
import Home from "../Page/Home";
import MainLayout from "../Layout/MainLayout/MainLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            }
        ]
    }
]);

export default router;