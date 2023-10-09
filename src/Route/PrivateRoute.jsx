import { useContext } from "react";
import { userContext } from "../Provider/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loader } = useContext(userContext);
    if (loader) {
        return <div className=" h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg"></span></div>
    }
    if (user) {
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;