import MainContent from "./MainContent";
import Sidebar from "./Sidebar";

const Dashboard = () => {
    return (
        <div className="flex">
            <div className="w-1/4">
                <Sidebar />
            </div>
            <div className="w-3/4">
                <MainContent />
            </div>
        </div>
    );
};

export default Dashboard;