import { AiOutlineProduct } from "react-icons/ai";
import { IoBagAddOutline } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            <ul className="menu w-full">
                 <div className="py-3 space-y-3">
                        <li>
                            <NavLink to="add-todo" className="text-lg text-gray-800">
                                <IoBagAddOutline />
                                <span className="text-[15px] font-medium mt-[4px]">Add Todo</span>
                            </NavLink>
                        </li>
                    </div>
                <div className="divider text-gray-800">Or</div>
                {/* <Common /> */}
            </ul>
        </div>
    );
};

export default Sidebar;