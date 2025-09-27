import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import LoadingSpinner from "../components/Navbar/LoadingSpinner/LoadingSpinner";

const PrivetRoute = ({ children }) => {
    const { loading, user } = useAuth();
    const location = useLocation();

    if (user) return children;
    if (loading) return <LoadingSpinner />
    return <Navigate to="/login" state={{ from: location.pathname }} replace={true} />
};

export default PrivetRoute;