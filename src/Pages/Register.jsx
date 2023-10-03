import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Navbar } from '../Components';
import { useUserAuth } from './AuthContext';
import logo from './Img/LOGO.png';
import 'bootstrap/dist/css/bootstrap.min.css';  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { collection, query, where, getDocs, setDoc, doc } from 'firebase/firestore';
import { db } from '../firebase-config';
import './Login.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { SignUp, googleSignUp } = useUserAuth();
  const navigate = useNavigate();
  const handleRegister = async (event) => {
    event.preventDefault();
    try {
      await SignUp(email, password);
      const userData = {
        username,
        email,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      navigate('/createDashboard');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      const result = await googleSignUp();
      const user = result.user;
      console.log('User Email:', user.email);
      const userData = {
        username: user.displayName,
        email: user.email,
      };
      localStorage.setItem('userData', JSON.stringify(userData));
      const profileCollectionRef = collection(db, 'profile_user');
      const emailQuery = query(profileCollectionRef, where('email', '==', user.email));
      const querySnapshot = await getDocs(emailQuery);

      if (!querySnapshot.empty) {
        // The email already exists
        alert('An account already exists with this email address.');
        navigate('/login');
      } else {
        navigate('/createDashboard');
      }
    } catch (err) {
      alert(err.message);
      // if (err.code === 'auth/account-exists-with-different-credential') {
      //   alert('An account already exists with a different credential. Please log in with that account.');
      //   navigate('/login');
      // }
    }
  };

  return (
    <>
      <Navbar />
      <br />
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card mt-5">
              {/* {error && <div class="alert alert-primary" role="alert">
                {error}
              </div>} */}
              <div className="card-body text-center">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <h1 className="mt-4">Register</h1>
                <form onSubmit={handleRegister} className="p-3 mt-3">

                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faUser} className="me-2" /> {/* Added icon */}
                      </span>
                      <input
                        type="text"
                        className="form-control"
                        id="userName"
                        placeholder="Email"
                        name='email'
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <br />
                  <div className="form-group">
                    <div className="input-group">
                      <span className="input-group-text">
                        <FontAwesomeIcon icon={faKey} className="me-2" /> {/* Added icon */}
                      </span>
                      <input
                        type="password"
                        className="form-control"
                        id="pwd"
                        placeholder="Password"
                        name='password'
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <br />
                    </div>
                  </div>
                  <button className="btn btn-primary mt-3" onClick={handleRegister} type='submit'>Register</button><br />
                  <button type='submit' onClick={handleGoogleSignUp} className="btn btn-primary mt-3">
                    <FontAwesomeIcon icon={faGoogle} className="me-2" />
                    Continue with Google
                  </button>
                </form>
                <div className="text-center fs-6 mt-3">
                  Already Have an Account ? <Link to='/login' underline style={{ color: "blue" }}>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
