import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const TodoUpdate = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const handleUpdate = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const time = form.time.value;
        const items = form.items.value;
        const description = form.description.value;
        const updateData = { title, time, items, description }
        console.log(updateData);

        // set data to database
        try {
            await axios.patch(`${import.meta.env.VITE_API}/update-todo/${id}`, updateData);
            toast.success('Todo Update Successful!!!');
            navigate('/my-todo')
        } catch (error) {
            toast.error(error.message)
        }
    }
    // get single todo info
    const { data: todoData } = useQuery({
        queryKey: ['todoData'],
        queryFn: async () => {
            const { data } = await axios.get(`${import.meta.env.VITE_API}/single-todo`)
            return data;
        }
    });
    console.log(todoData);
    return (
        <div className="p-8 w-11/12">
            <div className="rounded-box border border-base-content/5 bg-base-100 p-4">
                <form onSubmit={handleUpdate}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6">
                        {/* title */}
                        <div className=''>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='TodoTitle'
                            >
                                Title
                            </label>
                            <input
                                id='TodoTitle'
                                autoComplete='email'
                                name='title'
                                className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300'
                                type='text'
                                placeholder='Title'
                            />
                        </div>
                        {/* time */}
                        <div className=''>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600'
                                htmlFor='TodoTitle'
                            >
                                Time
                            </label>
                            <input
                                name="time"
                                type="time"
                                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300"
                            />
                        </div>
                        {/* Items */}
                        <div className=''>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='Items'
                            >
                                Items
                            </label>
                            <textarea name="items" className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Items"></textarea>
                        </div>
                        {/* description */}
                        <div className=''>
                            <label
                                className='block mb-2 text-sm font-medium text-gray-600 '
                                htmlFor='TodoTitle'
                            >
                                Description
                            </label>
                            <textarea name="description" className=" block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-indigo-300" placeholder="Description"></textarea>
                        </div>
                    </div>
                    <div className="mt-5">
                        <button
                            type='submit'
                            className='w-fit px-5 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10 cursor-pointer'
                        >
                            Update Todo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default TodoUpdate;