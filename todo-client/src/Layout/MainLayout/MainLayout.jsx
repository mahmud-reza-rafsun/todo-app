import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

const MainLayout = () => {
    const location = useLocation();
    const hideRoute = ['/login', '/sign-up'];
    const hideNavbar = hideRoute.includes(location.pathname);
    return (
        <div>
             {!hideNavbar && <Navbar />}
            <div className="">
                <Outlet/>
            </div>
        </div>
    );
};

export default MainLayout;