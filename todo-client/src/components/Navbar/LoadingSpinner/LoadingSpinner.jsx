import { HashLoader } from "react-spinners";

const LoadingSpinner = () => {
    return (
        <div className="bg-gray-800 flex justify-center items-center min-h-screen">
            <HashLoader
                color="#6366F1"
                cssOverride={{}}
                loading
                speedMultiplier={1}
            />
        </div>
    );
};

export default LoadingSpinner;