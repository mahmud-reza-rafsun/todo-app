import MainContent from "../Layout/Dashboard/MainContent/MainContent";
import Sidebar from "../Layout/Dashboard/Sidebar/Sidebar";


const Home = () => {
    return (
        <div className="flex">
            <div className="w-1/4 h-[calc(100vh-7vh)] p-4 shadow-lg">
                <Sidebar/>
            </div>
            <div className="min-w-10/12 ">
                <MainContent/>
            </div>
        </div>
    );
};

export default Home;