import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import IMG from './Img/LOGO.png'
import './detail.css'
import { Modal, Button } from "react-bootstrap";
import { CircularProgress } from "@mui/material";
import "./Page.css";
import { db } from "../firebase-config";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faSnapchat, faTwitter, faGgCircle, faYoutube, faLinkedinIn, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import 'boxicons/css/boxicons.min.css';
import Error from "./Error";
import { useNavigate } from "react-router-dom";
function CreatorDetails() {
  const { id } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [details, setDetails] = useState(null);
  const [copied, setCopied] = useState(false);
  const [mode, setmode] = useState(false);
  const navigate = useNavigate()
  useEffect(() => {
    async function fetchData() {
      const docRef = doc(db, "profile_user", id);
      const docSnap = await getDoc(docRef);
      const data = docSnap.data();
      console.log(data);
      if (!data) {
        // User with the provided ID doesn't exist
        navigate("/error"); // Navigate to the 404 page
      } else {
        setDetails(data);
      }
    }

    fetchData();
  }, [id]);
  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
  }
  const handleLinkClick = (url) => {
    // Open the link in a new tab/window
    window.open(url, "_blank");
  };
  const handleFacebookShare = () => {
    // Replace 'YOUR_PROFILE_URL' with the actual URL of the profile
    const profileUrl = window.location.href;
    const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(profileUrl)}`;
    window.open(facebookShareUrl, '_blank');
  };
  const handleInstagramShare = () => {
    // Replace 'YOUR_PROFILE_URL' with the actual URL of the profile
    const profileUrl = window.location.href;
    const instagramShareUrl = `https://www.instagram.com/?url=${encodeURIComponent(profileUrl)}`;
    window.open(instagramShareUrl, '_blank');
  };
  const handleTwitterShare = () => {
    // Replace 'YOUR_PROFILE_URL' with the actual URL of the profile
    const profileUrl = window.location.href;
    const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(profileUrl)}`;
    window.open(twitterShareUrl, '_blank');
  };
  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const dark = () => {
    setmode((prevMode) => !prevMode);
  }
  return (
    <>
      <div className="containers" style={{ background: mode ? "black" : "linear-gradient(to right,#A4F2FF,#FFBFFC)" }}>
        <br />
        <br />
        <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
          <Modal centered show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Share This Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="modal-dialog" role="document">
                <div className="modal-content col-12">
                  <div className="modal-header">
                    <h5 className="modal-title">Share on Social Media</h5>
                  </div>
                  <div className="modal-body">
                    <div className="icon-container1 d-flex">
                      <div className="smd">
                        <Facebook onClick={handleFacebookShare} className="img-thumbnail fab fa-twitter fa-2x" style={{ color: "#4c6ef5", backgroundColor: "aliceblue", width: '30', height: '30' }} />
                      </div>
                      <div className="smd">
                        <Instagram onClick={handleInstagramShare} className="img-thumbnail fab fa-twitter fa-2x" style={{ color: "#4c6ef5", backgroundColor: "aliceblue", width: '30', height: '30' }} />
                      </div>
                      <div className="smd">
                        <Twitter onClick={handleTwitterShare} className="img-thumbnail fab fa-twitter fa-2x" style={{ color: "#4c6ef5", backgroundColor: "aliceblue", width: '30', height: '30' }} />
                      </div>

                    </div>
                  </div>
                  <div className="modal-footer">
                    <div class="input-group">
                      <input type="text" id="tooltipExample" class="form-control" value={window.location.href} readonly />
                      <div class="input-group-append">
                        <a class="js-clipboard input-group-text" onClick={copy} href="javascript:;"
                          data-toggle="tooltip"
                          title="Copy to clipboard!"
                          data-type="tooltip"
                          data-success-text="Copied!"
                          data-content-target="#tooltipExample">
                          <span class="nova-layers">{!copied ? "Copy link" : "Copied!"}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Modal.Body>
          </Modal>

          <div className="card p-4">

            <div class="flex justify-end">
              <label class="switch">
                <span class="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                <span class="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>
                <input type="checkbox" class="input" onChange={dark} />
                <span class="slider"></span>
              </label>
            </div>
            {details ? (
              <>
                <div className="absolute justify-items-end top-10 h-16 w-16">
                  <svg
                    onClick={handleClick}
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    fill="currentColor"
                    className="bi bi-box-arrow-up"
                    viewBox="0 0 16 16"
                  >
                    <path fillRule="evenodd" d="M3.5 6a.5.5 0 0 0-.5.5v8a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5v-8a.5.5 0 0 0-.5-.5h-2a.5.5 0 0 1 0-1h2A1.5 1.5 0 0 1 14 6.5v8a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5v-8A1.5 1.5 0 0 1 3.5 5h2a.5.5 0 0 1 0 1h-2z" />
                    <path fillRule="evenodd" d="M7.646.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 1.707V10.5a.5.5 0 0 1-1 0V1.707L5.354 3.854a.5.5 0 1 1-.708-.708l3-3z" />
                  </svg>
                </div>
                <div className="image d-flex flex-column justify-content-center align-items-center">

                  <button className="btnss">
                    <img src={details.image} height="200" width="200" alt="Profile" />
                  </button>
                  <div class="social-links mt-3 text-center">
                    <a href="#" class="twitter"><i class="bx bxl-twitter icon-large"></i></a>
                    <a href="#" class="facebook"><i class="bx bxl-facebook icon-large"></i></a>
                    <a href="#" class="instagram"><i class="bx bxl-instagram icon-large"></i></a>
                    <a href="#" class="google-plus"><i class="bx bxl-youtube icon-large"></i></a>
                  </div>

                  <span className="name mt-3">{details.name}</span>
                  <span className="number">{details.category}</span>


                </div>

              </>
            ) : (
              <CircularProgress />
            )}
          </div>

        </div>
        <div class="flex bg-blue-400 justify-center items-center">
          {/* <Link to='/'>
            <img src={IMG} height="50" width="50" />
          </Link> */}
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default CreatorDetails;
