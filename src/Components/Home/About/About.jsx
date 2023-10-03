import React, { useEffect, useRef } from "react";
import "./About.css";
import Paper from "@mui/material/Paper";
import asset from "../../../Assets/KRIYA.mp4"
function About() {
  const videoEl = useRef(null);

  const attemptPlay = () => {
    videoEl &&
      videoEl.current &&
      videoEl.current.play().catch(error => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (
    <section id="about" className="about my-4">
      <div className="container" data-aos="fade-up">
        <div className="row gx-0">
          <Paper
            className="col-lg-6 d-flex flex-column justify-content-center p-2"
            data-aos="fade-up"
            data-aos-delay="200"
            elevation={0}
          >
            <div className="content">
              <h3>Who We Are</h3>
              <p>
                We enable the users to chat, learn and collaborate with our expert creators. Kriya has partnered with creators who are keen to share their journey to success and inspire their most loved users. This has been the main motto of Kriya to bring people together and connecting them. We believe that it will help you transform your lives and bring positivity around you.
                <br />
                <br />
                We are an online platform and help you to interact with expert creators from various fields such as finance, travel,sports, real estate, photography etc.
                <br />
                <br />
                {/* <span className="dark-blue-letters">GROW</span> with us ! <br />
                <span className="dark-blue-letters">G</span>ather the best
                curated Creators <br />
                <span className="dark-blue-letters">R</span>each the right
                audience on the right platforms <br />
                <span className="dark-blue-letters">O</span>ptimize engagement
                with exclusive influencer opportunities <br />
                <span className="dark-blue-letters">W</span>in more sales with
                insights from the influencer data and feedback loop */}
              </p>
            </div>
          </Paper>

          <div
            className="col-lg-6 d-flex align-items-center"
            data-aos="zoom-out"
            data-aos-delay="200"
          >
            <video width="100%" height="auto" playsInline loop muted controls ref={videoEl} >
              <source src={asset} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
