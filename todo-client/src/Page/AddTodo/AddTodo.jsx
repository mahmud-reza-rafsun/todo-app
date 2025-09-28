import toast from "react-hot-toast";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

const AddTodo = () => {
    const navigate = useNavigate();
    const handleAddTodo = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const time = form.time.value;
        const items = form.items.value;
        const description = form.description.value;
        const formData = { title, time, items, description, status: "Pending" }
        console.log(formData);

        // set data to database
        try {
            await axios.post(`${import.meta.env.VITE_API}/add-todo`, formData);
            toast.success('Todo add Successful!!!');
            navigate('/my-todo');
            window.location.reload();
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div className="p-3 md:p-8 w-[95%] md:w-full lg:w-11/12 container mx-auto">
            <div className="rounded-box border border-base-content/5 bg-base-100 p-4">
                <form onSubmit={handleAddTodo}>
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
                                required
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
                            className='w-fit px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10 cursor-pointer'
                        >
                            Add Todo
                        </button>
                    </div>
                </form>
            </div>
        </div>

    );
};

export default AddTodo;