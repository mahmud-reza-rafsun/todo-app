import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";

const MyTodo = () => {
    const [data: todo, isLoading, refetch] = useQuery({
        queryKey: ['todo'],
        queryFn: async () => {
            const {data} = await axios.get('/')
        }
    })
    return (
        <div>
            <div className="p-8 w-11/12">
                <div className="rounded-box border border-base-content/5 bg-base-100">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>SL.</th>
                                <th>Title</th>
                                <th>Date</th>
                                <th>Items</th>
                                <th>Description</th>
                                <th>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>Cy Ganderton</td>
                                <td>Quality Control Specialist</td>
                                <td>Blue</td>
                                <td>Lorem ipsum dolor sit amet consectetur adipisicing elit</td>
                                <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                    <div
                                        className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2   
                                        {role === "Moderator" && 'text-blue-500 bg-blue-100/60'} 
                                        {role === "Admin" && 'text-green-500 bg-green-100/60'}`}
                                    >
                                        <span
                                            className={`h-1.5 w-1.5 rounded-full 
                                            {role === "Moderator" && 'bg-blue-500'} 
                                            {role === "Admin" && 'bg-green-500'}`}
                                        ></span>
                                        <h2 className='text-sm font-normal '>Pending</h2>
                                    </div>
                                </td>
                                <td className="flex gap-x-3">
                                    <button type='submit' className='btn btn-xs px-3 py-4 text-sm font-medium tracking-wide text-black bg-transparent transition-colors duration-300 transform rounded-xl cursor-pointer'>
                                        <IoCheckmarkDone className="text-lg" />
                                    </button>
                                    <button type='submit' className='btn btn-xs px-3 py-4 text-sm font-medium tracking-wide text-black bg-transparent transition-colors duration-300 transform rounded-xl cursor-pointer'>
                                        <IoCloudUploadOutline className="text-[17px]" />
                                    </button>
                                    <button type='submit' className='btn btn-xs px-3 py-4 text-sm font-medium tracking-wide text-black bg-transparent transition-colors duration-300 transform rounded-xl cursor-pointer'>
                                        <HiOutlineViewfinderCircle className="text-lg" />
                                    </button>

                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyTodo;