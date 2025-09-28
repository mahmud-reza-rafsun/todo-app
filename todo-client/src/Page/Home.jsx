import MainContent from "../Layout/Dashboard/MainContent/MainContent";
import Sidebar from "../Layout/Dashboard/Sidebar/Sidebar";


const Home = () => {
    return (
        <div className="flex">
            <div className="lg:w-1/4 h-screen p-2 md:p-4 shadow-lg">
                <Sidebar />
            </div>
            <div className="min-w-10/12 ">
                <MainContent />
            </div>
        </div>
    );
};

export default Home;