import React, { useRef, useState } from "react";
import { Paper, Button } from "@mui/material";
import emailjs from "@emailjs/browser";

import { Navbar, Footer, Loader, Success } from "../Components";

function Signup() {
  const ref = useRef();
  const [state, setState] = useState(0);

  const sendEmail = (e) => {
    e.preventDefault();
    setState(1);
    console.log(ref.current);
    emailjs
      .sendForm(
        "service_jo6o3xb",
        "template_kakr7fj",
        ref.current,
        "01DlQMo7YXA1eJ9mz"
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
    <div>
      <Navbar />
      <br />
      <br />
      <div className="row m-2 align-items-center">
        <img
          className="col-md-4 col-xs-12 m-auto d-none d-md-block"
          src={require("../Assets/SignUp/signup.jpg")}
          alt="Signup_Image"
        />
        <img
          className="col-md-4 col-xs-12 m-auto d-md-none"
          src={require("../Assets/SignUp/signup.jpg")}
          alt="Signup_Image"
        />
        <Paper
          className="col-md-6 mx-auto d-flex flex-column justify-content-center"
          style={{
            height: "fit-content",
            minHeight: 200,
            paddingTop: 40,
            paddingBottom: 40,
          }}
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
                  Please provide a valid name.
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
                  Please provide a valid number.
                </div>
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  name="budget"
                  placeholder="Instagram Handle"
                  required
                />
                <div className="invalid-feedback">
                  Please provide a valid Instagram Handle.
                </div>
              </div>
              <div className="d-flex col-10 mx-md-auto gap-3">
                <button
                  className="col-6 my-3 form-button"
                  type="submit"
                  onClick={() => sendEmail()}
                >
                  SEND
                </button>
                <button type="reset" className="col-6 my-3 form-button">
                  CLEAR
                </button>
              </div>
            </form>
          )}
          {state === 1 && <Loader />}
          {state === 2 && <Success />}
        </Paper>
      </div>
      <Footer />
    </div>
  );
}

export default Signup;
