import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { Navigate, useLocation } from 'react-router';
import Spinner from '../components/Spinner';

const PrivateRoute = ({children}) => {

    const location = useLocation();

    const {user, loading}  = use(AuthContext);
    if(loading){
        return <Spinner></Spinner>;
    }
    if(user){
        return children;
    }
    return <Navigate state={location?.pathname} to="/login"></Navigate>;
};

export default PrivateRoute;