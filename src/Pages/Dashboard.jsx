import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { db } from '../firebase-config';
import { collection, query, doc, setDoc, where, getDocs, updateDoc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { useUserAuth } from './AuthContext';
import { Modal, Form, Button, Alert } from "react-bootstrap";
import Avatar from 'react-avatar-edit'
import 'bootstrap'
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { storage } from '../firebase-config';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Dashboard = () => {
    return (
        <>

        </>
    )

};

export default Dashboard;
