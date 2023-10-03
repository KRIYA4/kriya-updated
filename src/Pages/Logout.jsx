
import { useNavigate } from "react-router-dom";
import React, { useContext, useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CometChat } from "@cometchat-pro/chat";
const Logout = () => {
    const navigate = useNavigate();
    const [isLogged, setIsLogged] = useState(false);
    const handleLogout = () => {
        setIsLogged(false);
        localStorage.removeItem('userData');        
        navigate('/');
        CometChat.logout();

        toast("Wow so easy!")
    };

    return (
        <>
            <button type="button" onClick={handleLogout} class="btn btn-danger">Logout</button>
            <ToastContainer />
        </>
    );
};

export default Logout;
