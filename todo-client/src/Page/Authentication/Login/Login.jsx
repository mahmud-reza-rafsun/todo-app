import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import image from "../../../assets/images/image.jpg"
import { GoEye } from "react-icons/go";
import { useState } from "react";
import { GoEyeClosed } from "react-icons/go";
import useAuth from "../../../hooks/useAuth";
import LoadingSpinner from "../../../components/Navbar/LoadingSpinner/LoadingSpinner";

const Login = () => {
    const { handleGoogleSignIn, loading, user } = useAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    if (user) return <Navigate to={from} replace={true} />
    if (loading) return <LoadingSpinner />


    const handleLogin = (e) => {
        e.preventDefault();
    }
    const handleGoogle = () => {
        handleGoogleSignIn();
        navigate("/");
    }

    return (
        <div>
            <div className='flex justify-center items-center mt-28'>
                <div className='flex w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg lg:max-w-4xl '>
                    <div className='w-full px-6 py-8 md:px-8 lg:w-1/2'>

                        <p className='mt-3 text-xl text-center text-gray-600 '>
                            Get Your Free Account Now.
                        </p>

                        <div className="flex flex-col lg:flex-row justify-center items-center gap-0 lg:gap-4">
                            <button
                                onClick={handleGoogle}
                                className='flex w-full cursor-pointer items-center justify-center mt-4 text-gray-600 border-gray-400 transition-colors duration-300 transform border rounded-lg hover:bg-gray-50 '
                            >
                                <div className='px-4 py-2'>
                                    <svg className='w-6 h-6' viewBox='0 0 40 40'>
                                        <path
                                            d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                            fill='#FFC107'
                                        />
                                        <path
                                            d='M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z'
                                            fill='#FF3D00'
                                        />
                                        <path
                                            d='M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z'
                                            fill='#4CAF50'
                                        />
                                        <path
                                            d='M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z'
                                            fill='#1976D2'
                                        />
                                    </svg>
                                </div>

                                <span className='w-5/6 px-0 lg:px-4 py-3 font-semibold text-center'>
                                    Login with Google
                                </span>
                            </button>
                        </div>

                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>

                            <div className='text-xs text-center text-gray-500 uppercase  hover:underline'>
                                or Registration with email
                            </div>

                            <span className='w-1/5 border-b dark:border-gray-400 lg:w-1/4'></span>
                        </div>

                        <form onSubmit={handleLogin}>
                            {/* email */}
                            <div className='mt-4'>
                                <label
                                    className='block mb-2 text-sm font-medium text-gray-600 '
                                    htmlFor='LoggingEmailAddress'
                                >
                                    Email Address
                                </label>
                                <input
                                    id='LoggingEmailAddress'
                                    autoComplete='email'
                                    name='email'
                                    className='block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-opacity-10  focus:outline-none focus:ring focus:ring-blue-300'
                                    type='email'
                                    placeholder='Email Address'
                                    required
                                />
                            </div>
                            {/* password */}

                            <div className='mt-4 relative'>
                                <div className='flex justify-between'>
                                    <label
                                        className='block mb-2 text-sm font-medium text-gray-600' htmlFor='loggingPassword'>
                                        Password
                                    </label>
                                </div>
                                <input
                                    id='loggingPassword'
                                    autoComplete='current-password'
                                    name='password'
                                    className={`block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg focus:border-blue-400 focus:ring-opacity-10 focus:outline-none focus:ring focus:ring-blue-300`}
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder='Password'
                                />
                                <div onClick={() => setShowPassword(!showPassword)} className='absolute right-3 bottom-[7.5px]'>
                                    <div type='submit' className='cursor-pointer w-full px-2.5 py-1.5 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300        transform bg-indigo-400 rounded-lg hover:bg-indigo-50   0 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10'>
                                        {showPassword ? <GoEye /> : <GoEyeClosed />}
                                    </div>
                                </div>
                            </div>
                            <div className='mt-5'>
                                <button
                                    type='submit'
                                    className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-10 cursor-pointer'
                                >
                                    Login
                                </button>
                            </div>
                        </form>

                        <div className='flex items-center justify-between mt-4'>
                            <span className='w-1/5 border-b  md:w-1/4'></span>

                            <Link
                                to='/sign-up'
                                className='text-xs text-gray-500 uppercase  hover:underline'
                            >
                                or sign in
                            </Link>

                            <span className='w-1/5 border-b  md:w-1/4'></span>
                        </div>
                    </div>
                    <div
                        className='hidden bg-cover bg-center lg:block lg:w-1/2'
                        style={{
                            backgroundImage: `url(${image})`,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    );
};

export default Login;