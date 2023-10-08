import { useContext } from "react";
import { userContext } from "../Provider/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useContext(userContext);

    if (user) {
        return children;
    }
    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;