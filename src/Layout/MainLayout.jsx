import { Outlet } from "react-router-dom";
import Navber from "../component/Navber/Navber";
import Footer from "../component/Footer/Footer";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
    return (
        <div className="bg-orange-100">
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
            <Toaster />
        </div>
    );
};

export default MainLayout;