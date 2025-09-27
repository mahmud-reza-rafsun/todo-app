import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { HiOutlineViewfinderCircle } from "react-icons/hi2";
import { IoCheckmarkDone } from "react-icons/io5";
import { IoCloudUploadOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const MyTodo = () => {
    // const [modalOpen, setModalOpen] = useState(false);
    const { data: todo = [], refetch } = useQuery({
        queryKey: ['todo'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/add-todo`);
            refetch();
            return data;
        }
    })
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${import.meta.env.VITE_API}/delete/${id}`);
            toast.success('Delete Todo Successful!!')
            refetch();
        } catch (error) {
            console.error(error);
            toast.error(error.response?.data?.message || error.message || "Something went wrong!");
        }
    }
    const mordernDelete = (id) => {
        toast(
            (t) => (
                <div className='text-center space-y-3'>
                    <div>
                        <p>Are you want to <b>Delete?</b> </p>
                    </div>
                    <div className='gap-3 flex justify-center'>
                        <button className='bg-red-400 text-white cursor-pointer py-2 px-3 text-sm rounded-md font-semibold' onClick={() => {
                            toast.dismiss(t.id)
                            handleDelete(id)
                        }
                        }>Delete</button>
                        <button className='bg-blue-400 text-white cursor-pointer py-2 px-3 text-sm rounded-md font-semibold' onClick={() => toast.dismiss(t.id)}>Close</button>
                    </div>
                </div>
            )
        );
    }
    // update status
    const handleUpdateStatus = async (id) => {
        try {
            await axios.patch(`${import.meta.env.VITE_API}/status-update/${id}`);
            toast.success('Task Complete!!!')
            refetch();
        } catch (error) {
            toast.error(error.message);
        }
    }
    return (
        <div>
            <div className="p-5">
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
                            {
                                todo?.map((item, index) => <tr key={item?._id}>
                                    <th>{index + 1}</th>
                                    <td>{item?.title}</td>
                                    <td>{item?.time}</td>
                                    <td>{item?.items}</td>
                                    <td>{item?.description}</td>
                                    <td className='px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap'>
                                        <div
                                            className={`inline-flex items-center px-3 py-1 rounded-full gap-x-2   
                            ${item?.status === "Pending" && 'text-blue-500 bg-blue-100/60'} 
                            ${item?.status === "Complete" && 'text-green-500 bg-green-100/60'} `}
                                        >
                                            <span
                                                className={`h-1.5 w-1.5 rounded-full 
                            ${item?.status === "Pending" && 'bg-blue-500'} 
                            ${item?.status === "Complete" && 'bg-green-500'} 
                        `}
                                            ></span>
                                            <h2 className='text-sm font-normal '>{item?.status}</h2>
                                        </div>
                                    </td>
                                    <td className="flex gap-x-3">

                                        <button disabled={item?.status === "Complete"} onClick={() => handleUpdateStatus(item?._id)} type='submit' className='btn btn-xs px-3 py-4 text-sm font-medium tracking-wide text-black bg-transparent transition-colors duration-300 transform rounded-xl cursor-pointer'>
                                            <IoCheckmarkDone className={`${item?.status === "Pending" && "text-lg"} ${item?.status === "Complete" && "text-lg text-green-500 cursor-progress"}`} />
                                        </button>

                                        <Link to={`/update-todo/${item?._id}`}>
                                            <button type='submit' className='btn btn-xs px-3 py-4 text-sm font-medium tracking-wide text-green-500 bg-transparent transition-colors duration-300 transform rounded-xl cursor-pointer'>
                                                <IoCloudUploadOutline className="text-[17px]" />
                                            </button>
                                        </Link>

                                        <button onClick={() => mordernDelete(item?._id)} type='submit' className='btn btn-xs px-3 py-4 text-sm font-medium tracking-wide text-red-500 bg-transparent transition-colors duration-300 transform rounded-xl cursor-pointer'>
                                            <GoTrash className="text-[16px]" />
                                        </button>

                                        <button type='submit' className='btn btn-xs px-3 py-4 text-sm font-medium tracking-wide text-indigo-500 bg-transparent transition-colors duration-300 transform rounded-xl cursor-pointer'>
                                            <HiOutlineViewfinderCircle className="text-lg" />
                                        </button>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyTodo;