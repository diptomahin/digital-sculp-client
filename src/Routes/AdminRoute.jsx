import { useContext } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import UseLoggedUser from "../Hooks/UseLoggedUser";

const AdminRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const {savedUser, userLoading} = UseLoggedUser()
    const { userRole } = savedUser;

    const location = useLocation();

    if (loading||userLoading) {
        return <span className="loading loading-infinity loading-lg"></span>
    }

    if (user&& userRole === 'admin') {
        return children;
    }

    return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default AdminRoute;