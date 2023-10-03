import React from "react";
import { useContext } from "react";
import { Paper } from "@mui/material";
import logo from './LOGO.png';
import { Link } from "react-router-dom";
import themeContext from '../../Theme/ThemeContext'
function Footer() {
  const { isDark } = useContext(themeContext);
  return (
    <Paper id="footer" className="footer mt-4">
      <Paper className="footer-top">
        <div className="container">
          <div className="row gy-4">
            <div className="col-lg-5 col-md-12 footer-info">

              <strong>

                <div class="section-title">
                  <a
                    href=""
                    className="logo text-decoration-none"
                    style={{ marginLeft: "20px" }}
                  >
                    <span style={{ color: "#3090f0" }}>KRIYA</span>
                  </a>

                </div>
              </strong>
              <p>
                Building a Network of Brands, Developers and Influencers.
              </p>
              <div className="social-links mt-3" style={{ color: "#3090f0" }}>
                <a href="https://www.instagram.com/connectandcollabs/" className="instagram">
                  <i className="bi bi-instagram" style={{ color: "#3090f0" }}></i>
                </a>
                <a href="https://www.linkedin.com/company/connectandcollabs/mycompany/" className="linkedin">
                  <i className="bi bi-linkedin" style={{ color: "#3090f0" }}></i>
                </a>
              </div>
            </div>

            <div className="col-lg-2 col-6 footer-links" >
              <h4 style={{ color: "#3090f0" }}>Useful Links</h4>
              <ul >
                <li >
                  <i className="bi bi-chevron-right"></i> <Link to='/' style={{ color: isDark ? "white":"black" }} >Home</Link>
                </li>
                <li style={{ color: "#3090f0" }}>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link to='/collaboration'  style={{ color: isDark ? "white":"black" }}>Collaboration</Link>
                </li>
                <li style={{ color: "#3090f0" }}>
                  <i className="bi bi-chevron-right"></i>{" "}
                  <Link to='/creators' style={{ color: isDark ? "white":"black" }}>Creators</Link>
                </li>
                <li style={{ color: "#3090f0" }}>
                  <i className="bi bi-chevron-right"></i>
                  <Link to='/' style={{ color: isDark ? "white":"black" }}> Terms of service</Link>
                </li>
                <li style={{ color: "#3090f0" }}>
                  <i className="bi bi-chevron-right"></i>
                  <Link to='/' style={{ color: isDark ? "white":"black" }}>Privacy policy</Link>
                </li>
                <li style={{ color: "#3090f0" }}>
                  <i className="bi bi-chevron-right"></i>
                  <Link to='/contactus' style={{ color: isDark ? "white":"black" }}>Contactus</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
              <h4 style={{ color: "#3090f0" }}>Contact Us</h4>
              <p>
              RASNY TECH PVT LTD 
                <br /> WESTEND MARG, 
                <br />
                South West Delhi-110030,India
                <br />
                <br />
                <strong>Phone:</strong> +91 9380734507
                <br />
                <strong>Email:</strong> team@connectandcollabs.com
                <br />
              </p>
            </div>
          </div>
        </div>
      </Paper>

      <div className="container">
        <div className="copyright" style={{ color: "#3090f0" }}>
          &copy; Copyright{" "}
          <strong>
            <span>KRIYA</span>
          </strong>
          . All Rights Reserved
        </div>
      </div>
    </Paper>
  );
}

export default Footer;
