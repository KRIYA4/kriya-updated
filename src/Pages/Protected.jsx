import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import {useUserAuth } from './AuthContext';

const Protected = ({ children }) => {
    let {user} = useUserAuth();
    if(!user){
        return <Navigate to='/' />
    }
    return children;
}
export default Protected;
