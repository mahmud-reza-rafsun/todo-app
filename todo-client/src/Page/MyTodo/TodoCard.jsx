import { IoCheckmarkDone, IoCloudUploadOutline } from "react-icons/io5";
import { GoTrash } from "react-icons/go";
import { Link } from "react-router-dom";

const TodoCard = ({ todo = [], handleUpdateStatus, mordernDelete }) => {
    return (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 p-3">
            {todo?.map((item, index) => (
                <div key={item?._id} className="p-4 bg-white rounded-xl shadow-md border border-indigo-200">
                    <div className="flex justify-between items-start mb-2">
                        <h2 className="font-semibold text-lg">{item?.title}</h2>
                        <span className="text-sm text-gray-500">#{index + 1}</span>
                    </div>

                    <p className="text-sm text-gray-600"><strong>Time:</strong> {item?.time}</p>
                    <p className="text-sm text-gray-600"><strong>Items:</strong> {item?.items}</p>
                    <p className="text-sm text-gray-600 mt-1 line-clamp-3"><strong>Description:</strong> {item?.description}</p>

                    <div className="mt-3">
                        <span
                            className={`inline-flex items-center px-3 py-1 rounded-full text-xs gap-x-2 
                ${item?.status === "Pending" ? "text-blue-500 bg-blue-100/60" : ""} 
                ${item?.status === "Complete" ? "text-green-500 bg-green-100/60" : ""}`}
                        >
                            <span className={`h-1.5 w-1.5 rounded-full ${item?.status === "Pending" ? "bg-blue-500" : ""} ${item?.status === "Complete" ? "bg-green-500" : ""}`}></span>
                            {item?.status}
                        </span>
                    </div>

                    <div className="flex gap-x-3 mt-4">
                        <button disabled={item?.status === "Complete"} onClick={() => handleUpdateStatus(item?._id)} className="btn btn-xs px-3 py-4 text-sm text-black bg-transparent rounded-xl">
                            <IoCheckmarkDone className={`${item?.status === "Pending" ? "text-lg" : ""} ${item?.status === "Complete" ? "text-lg text-green-500 cursor-progress" : ""}`} />
                        </button>

                        <Link to={`/update-todo/${item?._id}`}>
                            <button className="btn btn-xs px-3 py-4 text-sm text-green-500 bg-transparent rounded-xl">
                                <IoCloudUploadOutline className="text-[17px]" />
                            </button>
                        </Link>

                        <button onClick={() => mordernDelete(item?._id)} className="btn btn-xs px-3 py-4 text-sm text-red-500 bg-transparent rounded-xl">
                            <GoTrash className="text-[16px]" />
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoCard;
