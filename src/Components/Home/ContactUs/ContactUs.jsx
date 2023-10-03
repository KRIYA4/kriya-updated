import React, { useRef, useState } from "react";
import { Paper } from "@mui/material";
import emailjs from "@emailjs/browser";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Loader, Success } from "../../";

import "./ContactUs.css";

function ContactUs() {
  const ref = useRef();
  const [state, setState] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();
    setState(1);
    console.log(ref.current);
    emailjs
      .sendForm(
        "service_aqlzo45",
            "template_xplhz6a",
        ref.current,
        "e7INNnZWCxwVg8OQD"
      )
      .then(
        function (response) {
          setState(2);
          console.log("SUCCESS!", response.status, response.text);
        },
        function (error) {
          console.log("FAILED...", error);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <header className="text-center my-4">
          <h5 className="mx-auto my-4 font-bold" style={{color:"#3090f0"}}>CONTACT US</h5>
        </header>

        <div className="row gy-4">
          <div className="col-lg-6">
            <div className="row gy-4">
              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="200">
                  <i class="bi bi-geo-alt"></i>
                  <h3>Address</h3>
                  <p>RASNY TECH PVT LTD , WESTEND MARG,
                    South West Delhi-110030
                    India </p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="300">
                  <i class="bi bi-telephone"></i>
                  <h3>Call Us</h3>
                  <p>+91 9059225204</p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="400">
                  <i class="bi bi-envelope"></i>
                  <h3>Email Us</h3>
                  <p>team@connectandcollabs.com</p>
                </div>
              </div>

              <div class="col-md-6">
                <div class="info-item" data-aos="fade" data-aos-delay="500">
                  <i class="bi bi-clock"></i>
                  <h3>Open Hours</h3>
                  <p>Monday - Friday
                 <br/> 9:00AM - 05:00PM</p>
                </div>
              </div>
            </div>
          </div>

          <Paper
            className="col-lg-6 d-flex flex-column justify-content-center"
            sx={{ minHeight: 200 }}
          >
            {state === 0 && (
              <form
                ref={ref}
                onSubmit={sendEmail}
                className="needs-validation"
                noValidate
              >
                <div className="mb-3">
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Name"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid Name.
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid email.
                  </div>
                </div>
                <div className="mb-3">
                  <input
                    type="number"
                    className="form-control"
                    name="mobile"
                    placeholder="Mobile"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid mobile number.
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    placeholder="Message"
                    rows="3"
                    name="message"
                    required
                  />
                  <div className="invalid-feedback">
                    Please provide a valid message.
                  </div>
                </div>
                <div className="d-flex col-10 mx-auto gap-3">
                  <button
                    className="col-6 my-3 form-button"
                    type="submit"
                    onClick={() => sendEmail()}
                  >
                    SEND
                  </button>
                  <button
                    className="col-6 my-3 form-button"
                    type="reset"
                    onClick={() => ref.form.reset()}
                  >
                    CLEAR
                  </button>
                </div>
              </form>
            )}
            {state === 1 && <Loader />}
            {state === 2 && <Success />}
          </Paper>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
