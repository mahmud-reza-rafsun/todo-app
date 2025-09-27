import { Link, useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast'
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const { handleSignOut, user } = useAuth();
    const navigate = useNavigate();
    const handleLogOut = () => {
        try {
            handleSignOut();
            toast.success('Log Out Successful!!');
            navigate('/')
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div className="bg-base-100 shadow-sm sticky top-0 z-50">
            <div className="navbar container mx-auto">
                <div className="flex-1">
                    <Link to="/" className="font-semibold cursor-pointer text-xl">To Do</Link>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt={user?.displayName}
                                    src={user?.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li className="py-1">
                                <button onClick={handleLogOut} className="btn btn-xs shadow-none border-none text-white bg-red-500" >Log Out</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;