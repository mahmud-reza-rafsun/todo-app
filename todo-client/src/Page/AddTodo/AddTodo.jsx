import toast from "react-hot-toast";
import MyTodo from "../MyTodo/MyTodo";
import axios from 'axios'

const AddTodo = () => {
    const handleAddTodo = async (e) => {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const date = form.date.value;
        const items = form.items.value;
        const description = form.description.value;
        const formData = { title, date, items, description }
        console.log(formData);

        // set data to database
        try {
            await axios.post(`${import.meta.env.VITE_API}/add-todo`, formData);
            toast.success('Todo add Successful!!!');
        } catch (error) {
            toast.error(error.message)
        }
    }
    return (
        <div>
            <div className="p-8 w-11/12">
                <div className="rounded-box border border-base-content/5 bg-base-100 p-4">
                    <form onSubmit={handleAddTodo}>
                        <div className="grid grid-cols-2 gap-6">
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
                            {/* date */}
                            <div className=''>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600'
                                    htmlFor='TodoTitle'
                                >
                                    Date & Time
                                </label>
                                <input
                                    name="date"
                                    type="datetime-local"
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
            <div>
                <MyTodo />
            </div>
        </div>

    );
};

export default AddTodo;