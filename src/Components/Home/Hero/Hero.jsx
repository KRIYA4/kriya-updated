import React from "react";
import "./Hero.css";
import Typed from "react-typed";
import { Typography, useTheme } from "@mui/material/";
import themeContext from "../../../Theme/ThemeContext";
import darkBG from "../../../Assets/Hero/hero-bg-dark.png";
import lightBG from "../../../Assets/Hero/hero-bg.png";
import { useContext } from "react";
function Hero() {
  const theme = useTheme();
  const { isDark, setTheme } = useContext(themeContext);
  return (
    <div>
      <section
        id="hero"
        className="hero d-flex align-items-center"
        style={{
          backgroundImage: `url(${theme.palette.mode == "dark" ? darkBG : lightBG
            })`,
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 d-flex flex-column justify-content-center">
              <div className="justify-content-center">
                <Typography variant="h4" gutterBottom style={{ color: isDark ? "white" : "black" }}>
                  Connect with{" "}
                  <Typed
                    strings={[
                      "ARTISTS", "CREATORS", "COACHES", "INFLUENCERS"," THERAPISTS"
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop
                    style={{
                      // Apply linear gradient text color
                      background: "linear-gradient(#ABDCFF,#0396FF)", // Example gradient
                      "-webkit-background-clip": "text",
                      "-webkit-text-fill-color": "transparent",
                    }}
                  />
                </Typography>
              </div>

              <h2 data-aos="fade-up" data-aos-delay="400">
                Create your own branding portfolio.
              </h2>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Launch your own store in 5 minutes.
              </h2>
              <h2 data-aos="fade-up" data-aos-delay="400">
                Get paid instantly.
              </h2>
              <div className="d-sm-flex w-100 gap-5">
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <a
                      href="/contactus"
                      className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                      style={{ width: "18rem", textDecoration: "none" }}
                    >
                      <span style={{ fontWeight: 200 }}>SIGNUP AS CREATOR</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                  <div className="text-center text-lg-start">
                    <a
                      href="/collaboration"
                      className="btn-get-started scrollto d-inline-flex align-items-center justify-content-center align-self-center"
                      style={{ width: "16rem", textDecoration: "none" }}
                    >
                      <span style={{ fontWeight: 200 }}>I AM A BRAND</span>
                      <i className="bi bi-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="col-lg-6 hero-img"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              <img
                src={require("../../../Assets/Hero/hero-img.png")}
                className="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
