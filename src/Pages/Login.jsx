import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useUserAuth } from './AuthContext';
import './Login.css';
import { Navbar } from '../Components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import logo from './Img/LOGO.png';
import { CometChat } from "@cometchat-pro/chat";
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [forgotPassword, setForgotPassword] = useState(false);
  const { logIn, googleSignIn, resetEmail } = useUserAuth();
  const navigate = useNavigate();
  const { user } = useUserAuth()

  useEffect(() => {
    // Check if user data exists in localStorage and automatically redirect to dashboard if it does
    const userData = localStorage.getItem('userData');
    if (userData) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      // const authKey = 'fe1d1108b2c57976a7bebfbfa38d79b163c06008'
      const authKey = 'c846c8446effa5f0795dfd0230754656e808f278'
      const User = await logIn(email, password);
      saveUserDataToLocalStorage(User);

      let uId = user.uid
      CometChat.login(uId, authKey).then(
        user => {
          console.log("Login Successful:", { user });
        },
        error => {
          console.log("Login failed with exception:", { error });
        }
      );
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  const handleForgotPassword = () => {
    setForgotPassword(true);
    setError('');
  };
  // useEffect(() => {
  //   // const appID = '24283169a11f6179';
  //   const appID = '243207323420c800'
  //   const region = 'US';
  //   const appSetting = new CometChat.AppSettingsBuilder()
  //     .subscribePresenceForAllUsers()
  //     .setRegion(region)
  //     .build();

  //   CometChat.init(appID, appSetting).then(
  //     () => {
  //       console.log('CometChat Initialization completed successfully');
  //     },
  //     (error) => {
  //       console.log('CometChat Initialization failed with error:', error);
  //     }
  //   );
  // }, []);
  const handleForgotPasswordSubmit = async (event) => {
    event.preventDefault();
    try {
      await resetEmail(email);
      setForgotPassword(false); // Reset the forgotPassword state after submission
      setError('Password reset email sent. Check your inbox.'); // Display success message
    } catch (err) {
      setError(err.message);
    }
  };

  const close = () => {
    setError('');
  };

  const handleGoogleSignIn = async () => {
    try {
      // const authKey = 'fe1d1108b2c57976a7bebfbfa38d79b163c06008'
      const authKey = 'c846c8446effa5f0795dfd0230754656e808f278'
      const User = await googleSignIn();
      saveUserDataToLocalStorage(User);

      let uId = user.uid
      CometChat.login(uId, authKey).then(
        user => {
          console.log("Login Successful:", { user });
        },
        error => {
          console.log("Login failed with exception:", { error });
        }
      );
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };
  
  const saveUserDataToLocalStorage = (user) => {
    // Save user data to localStorage
    const userData = JSON.stringify(user);
    localStorage.setItem('userData', userData);
  };

  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-6">
            <div className="card mt-5">
              {error && (
                <div className="alert alert-primary" role="alert">
                  {error}{' '}
                  <button
                    type="button"
                    className="close"
                    onClick={close}
                    data-dismiss="alert"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
              )}
              <div className="card-body text-center">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
                <h4 className="mt-4">Login</h4>
                {!forgotPassword ? (
                  <form onSubmit={handleLogin} className="p-3 mt-3">
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faUser} className="me-2" />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="userName"
                          placeholder="Email"
                          name="email"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <br />
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon icon={faKey} className="me-2" />
                        </span>
                        <input
                          type="password"
                          className="form-control"
                          id="pwd"
                          placeholder="Password"
                          name="password"
                          onChange={(e) => setPassword(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-primary mt-3"
                      type="submit"
                    >
                      Login
                    </button>
                    <br />
                    <button
                      type="button"
                      onClick={handleGoogleSignIn}
                      className="btn btn-primary mt-3"
                    >
                      <FontAwesomeIcon
                        icon={faGoogle}
                        className="me-2"
                      />
                      Continue with Google
                    </button>
                    <div className="text-center fs-6 mt-3">
                      <p onClick={handleForgotPassword}>
                        Forgot password?
                      </p>{' '}
                      or{' '}
                      <Link to="/signup" style={{ color: 'blue' }}>
                        Signup
                      </Link>
                    </div>
                  </form>
                ) : (
                  <form
                    onSubmit={handleForgotPasswordSubmit}
                    className="p-3 mt-3"
                  >
                    <div className="form-group">
                      <div className="input-group">
                        <span className="input-group-text">
                          <FontAwesomeIcon
                            icon={faUser}
                            className="me-2"
                          />
                        </span>
                        <input
                          type="text"
                          className="form-control"
                          id="forgotPasswordEmail"
                          placeholder="Email"
                          name="forgotPasswordEmail"
                          onChange={(e) => setEmail(e.target.value)}
                        />
                      </div>
                    </div>
                    <button
                      className="btn btn-primary mt-3"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
