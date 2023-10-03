import React, { useRef, useState } from "react";
import { Typography, Button, Paper } from "@mui/material";
import emailjs from "@emailjs/browser";

import { Navbar, Footer, Loader, Success } from "../Components";

function Collaboration() {
  const ref = useRef();
  const [state, setState] = useState(0);

  const sendCollab = (e) => {
    e.preventDefault();
    setState(1);
    emailjs
      .sendForm(
        "service_aqlzo45",
        "template_il141r2",
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
    <>
      <div
        style={{ height: "100%", width: "100%" }}
        className="collaboration d-flex flex-column align-items-center"
      >
        <Navbar />
        <br/>
        <br/>
        <h2>COLLABORATION</h2>
        <img
          className="col-md-8 col-12 mx-auto my-4 d-block"
          src={require("../Assets/Collab/brand.jpg")}
          alt="Brand_Image"
        />

        <div className="row m-2 gap-3">
          <div className="col-md-4 d-flex flex-column justify-content-around gap-3">
            <h2 className="black-bold-text">
              Get your brands/products promoted instantly with our wide range of
              creators.
            </h2>
            <h2 className="black-bold-text">
              Scale your product sales through our influencer marketing network.
            </h2>
            <h2 className="black-bold-text">
              We are here to help you talk to us today.
            </h2>
          </div>

          <Paper
            className="col-md-7 d-flex flex-column justify-content-center p-3"
            sx={{ minHeight: 200 }}
          >
            {state === 0 && (
              <form
                ref={ref}
                onSubmit={sendCollab}
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
                  <select
                    className="form-select"
                    placeholder="Number of Influencers"
                    name="influencers"
                    required
                  >
                    <option disabled selected value="">
                      Select Number of Influencers
                    </option>
                    <option value="> 10">{">"}10</option>
                    <option value="> 50">{">"}50</option>
                    <option value="> 100">{">"}100</option>
                    <option value="> 1,000">{">"}1,000</option>
                    <option value="> 10,000">{">"}10,000</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid selection.
                  </div>
                </div>
                <div className="mb-3">
                  <select
                    className="mb-3 form-select"
                    aria-label="Default select example"
                    name="budget"
                    required
                  >
                    <option disabled selected value="">
                      Budget
                    </option>
                    <option value="0-10K">0-10K</option>
                    <option value="10K-25K">10K-25K</option>
                    <option value="25K-50K">25K-50K</option>
                    <option value="50K-1L">50K-1L</option>
                    <option value="> 1L">{">"}1L</option>
                  </select>
                  <div className="invalid-feedback">
                    Please provide a valid selection.
                  </div>
                </div>
                <div className="d-flex col-10 mx-md-auto gap-3">
                  <button
                    className="col-6 my-3 form-button"
                    type="submit"
                    onClick={() => sendCollab()}
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
      </div>
      <Footer />
    </>
  );
}

export default Collaboration;
