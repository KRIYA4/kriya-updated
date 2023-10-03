import './Dashboard.css';
import { db } from '../firebase-config';
import { collection, doc, setDoc, query, where, getDocs } from 'firebase/firestore';
import { Navigate, useNavigate } from 'react-router-dom';
import { useUserAuth } from './AuthContext';
import { Modal, Form, Button, Alert } from "react-bootstrap";
import Avatar from 'react-avatar-edit'
import 'bootstrap';
import { useState } from 'react';
import { ref, uploadString, getDownloadURL } from 'firebase/storage';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage } from '../firebase-config';
import { CometChat } from "@cometchat-pro/chat";
import { useEffect } from 'react';
import debounce from 'lodash/debounce';

const CreateDashboard = () => {
    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [username, setUsername] = useState('');
    const [links, setLinks] = useState([{ name: 'Instagram', url: '' }]);
    const { user } = useUserAuth()
    const [errorMessage, setErrorMessage] = useState('');
    const [displayParam, setDisplayParam] = useState(true);
    const [imageUpload, setImageUpload] = useState(false);
    const [image, setImage] = useState('');
    const navigate = useNavigate();
    const [isEditing, setIsEditing] = useState(false);
    const [src, setsrc] = useState(null);
    const [preview, setpreview] = useState(true);
    const [showAvatar, setShowAvatar] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [value, setValue] = useState("");

    const [btn, setbtn] = useState(false);
    // let authKey = 'c846c8446effa5f0795dfd0230754656e808f278'
    // useEffect(() => {

    //     // const appID = '24283169a11f6179';
    //     const appID = '243207323420c800'
    //     const region = "US";
    //     const appSetting = new CometChat.AppSettingsBuilder().subscribePresenceForAllUsers().setRegion(region).build();
    //     CometChat.init(appID, appSetting).then(
    //         () => {
    //             console.log("Initialization completed successfully");

    //         },
    //         error => {
    //             console.log("Initialization failed with error:", error);
    //             // Check the reason for error and take appropriate action.
    //         }
    //     );
    // }, [])

    const onClose = () => {
        setpreview(null);
    }
    const onCrop = view => {
        setpreview(view);
    }
    const handleChange = (event) => {
        setValue(event.target.value)
    };
    const handleClick = () => {
        setShowModal(true)
    };
    const handleClose = () => {
        setShowModal(false)
    };

    const handleDone = async () => {
        try {
            const storageRef = ref(storage, `profile_images/${user.uid}`);
            const uploadTask = uploadString(storageRef, preview, 'data_url');
            const snapshot = await uploadTask;
            const imageUrl = await getDownloadURL(snapshot.ref);

            setImage(imageUrl);
            setShowAvatar(false);
            setShowModal(false);
            setImageUpload(true);
        } catch (error) {
            console.log('Error uploading image:', error);
        }
    };
    const handleAddLink = () => {
        if (links.length < 10) {
            // Define a list of default link names
            const defaultLinkNames = [
                'Instagram',
                'Facebook',
                'Snapchat',
                'Twitter',
                'LinkedIn',
                'GitHub',
                // Add more default names here if needed
            ];

            // Pick a default name from the list based on the current length of links
            const defaultName = defaultLinkNames[links.length];

            // Add the new link with the default name to the links state
            setLinks([...links, { name: defaultName, url: '' }]);
        }
    };

    const handleLinkNameChange = (index, event) => {
        const updatedLinks = [...links];
        updatedLinks[index].name = event.target.value;
        setLinks(updatedLinks);
    };

    const handleLinkURLChange = (index, event) => {
        const updatedLinks = [...links];
        updatedLinks[index].url = event.target.value;
        setLinks(updatedLinks);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
        setErrorMessage('');
    };

    const handleBioChange = (event) => {
        setBio(event.target.value);
    };


    const handleUsernameChange = async (event) => {
        const enteredUsername = event.target.value;
        if (enteredUsername.includes(" ")) {
            alert("Username should not contain spaces.");
        }
        setUsername(enteredUsername);
    };


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);

        };
        reader.readAsDataURL(file);

    };
    const handleGetStarted = async (event) => {
        event.preventDefault();
        if (username.includes(" ")) {
            alert('Username should not contain spaces.');
            return;
        }
        if (name !== '' || bio !== '' || username !== '') {
            const profileCollectionRef = collection(db, 'profile_user');
            const nameQuery = query(profileCollectionRef, where('username', '==', username));
            const querySnapshot = await getDocs(nameQuery);

            if (!querySnapshot.empty) {
                alert('Username already exists. Please choose a different name.');
                setErrorMessage("Username should not contain spaces.");
                return;
            }
            if (!imageUpload) {
                // Show an alert to the user to upload an image
                alert('Please upload an image before proceeding.');
                return;
            }

            // Create the profile document in Firestore
            await setDoc(doc(profileCollectionRef, username), {
                image,
                name,
                email: user.email,
                bio,
                links,
                displayParam,
                username,
                completed: false,
            });

            // Create the user in CometChat after account creation
            let uid = user.uid;
            let chatUser = new CometChat.User(uid);
            chatUser.setName(name);

            // CometChat.createUser(chatUser, authKey).then(
            //     (user) => {
            //         console.log('CometChat user created:', user);

            //         // Now, log in the user after successful account creation
            //         CometChat.login(uid, authKey).then(
            //             (user) => {
            //                 console.log("CometChat user logged in:", user);
            toast.success('Successfully Created Account!', {
                onClose: () => navigate('/'), // Assuming you are using the navigate hook to redirect
            });
            //             },
            //             (error) => {
            //                 console.log("CometChat login failed with exception:", error);
            //                 toast.error('Failed to log in after account creation.');
            //             }
            //         );
            //     },
            //     (error) => {
            //         console.log('CometChat error:', error);
            //         toast.error('Failed to create CometChat user.');
            //     }
            // );
        }
    };


    return (
        <>
            <div className="flex justify-center items-center h-screen">

                <ToastContainer />

                <div id="__nuxt">
                    <div id="__layout">

                        <div>
                            <div className="mb-24 text-center">
                                <div className="font-inter font-bold text-24 leading-7">Setup your page</div>
                                <div className="mt-8 font-inter font-normal  text-14 leading-4">
                                    Let’s setup Connect & Collabs 🎉 Account
                                </div>
                            </div>
                            <div className="">
                                <div className="auth-next-step-wrap rounded-md p-32 xs:w-full xs:pt-16">
                                    <div>
                                        <div className="flex justify-between items-center xs:block">
                                            <div onClick={handleClick} className="profile-img-up rounded-full xs:mx-auto flex-both-center cursor-pointer relative border-upload-gray">
                                                {/* <input
                                                        type="file"
                                                        name="image"
                                                        id="profile-img-upload"
                                                        accept="image/*"
                                                        className="p-b-wrap absolute opacity-0 cursor-pointer"
                                                        onChange={handleFileChange}
                                                    /> */}
                                                <div>
                                                    <Modal centered show={showModal} onHide={handleClose}>
                                                        <Modal.Header closeButton>
                                                            <Modal.Title>Choose Image</Modal.Title>
                                                        </Modal.Header>
                                                        <Modal.Body>
                                                            <Avatar
                                                                onCrop={onCrop}
                                                                onClose={onClose}
                                                                width={350}
                                                                height={350}
                                                                src={src}
                                                                style={{ borderRadius: '100%' }}
                                                            />
                                                        </Modal.Body>
                                                        <Modal.Footer>
                                                            <Button onClick={handleClose}>Close</Button>
                                                            <Button onClick={handleDone}>
                                                                Crop
                                                            </Button>
                                                        </Modal.Footer>
                                                    </Modal>
                                                </div>
                                                <div className="image-container" style={{ overflow: 'hidden' }}>
                                                    {image ? (
                                                        <img className="profile-pic" src={image} alt="Profile" />
                                                    ) : (
                                                        <div></div>
                                                    )}
                                                </div>
                                                <span className="bl-circle-loader gradient-loader absolute hidden"></span>
                                            </div>
                                            <div className="xs:mt-24 xs:mx-auto pl-24 w-3/4 xs:w-full xs:pl-0">
                                                <div className="input-main-wrap overflow-hidden rounded-sm">
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        placeholder="Your name"
                                                        className="bl-input w-full p-16 text-14 font-normal font-inter"
                                                        value={name}
                                                        onChange={handleNameChange}
                                                    />
                                                </div>
                                                <div className="input-main-wrap mt-16 overflow-hidden rounded-sm">
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        placeholder="Your Username"
                                                        className="bl-input w-full p-16 text-14 font-normal font-inter "
                                                        value={username}
                                                        onChange={handleUsernameChange}
                                                    />
                                                </div>
                                                <div className="input-main-wrap mt-16 overflow-hidden rounded-sm">
                                                    <input
                                                        type="text"
                                                        name="bio"
                                                        placeholder="Your Bio"
                                                        className="bl-input w-full p-16 text-14 font-normal font-inter "
                                                        value={bio}
                                                        onChange={handleBioChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-32 mb-8 font-inter font-semibold">Create Social Links</div>
                                    <div>
                                        {links.map((link, index) => (
                                            <div key={index} className="border mt-16 border-bl-sp-grey px-12">
                                                <div className="border-b border-bl-sp-grey">
                                                    <input
                                                        placeholder="Link name "
                                                        type="text"
                                                        className="bl-input w-full p-16 text-14 font-normal font-inter"
                                                        value={link.name}
                                                        onChange={(event) => handleLinkNameChange(index, event)}
                                                    />
                                                </div>
                                                <div>
                                                    <input
                                                        placeholder="URL "
                                                        type="text"
                                                        className="bl-input w-full p-16 text-14 font-normal font-inter"
                                                        value={link.url}
                                                        onChange={(event) => handleLinkURLChange(index, event)}
                                                    />
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div
                                        className="mt-16 cursor-pointer text-14 font-inter text-blPrimary"
                                        onClick={handleAddLink}
                                    >
                                        + <span className="hover:underline">Create Social Link</span>
                                    </div>
                                    {errorMessage && <div className="text-red-500 mt-4">{errorMessage}</div>}
                                    <button
                                        className="bl-btn bl-btn-md bl-bg text-white rounded-sm leading-17 relative flex-both-center mt-24 w-full uppercase tracking-2"
                                        onClick={handleGetStarted}
                                    >
                                        <span className="bl-circle-loader absolute hidden"></span>
                                        Get Started
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>

            </div>

        </>
    );
};

export default CreateDashboard;