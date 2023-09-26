import { Outlet } from "react-router-dom";
import Navbar from "../components/Headers/Navbar/Navbar";


const MainPage = () => {
    return (
        <div className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default MainPage;