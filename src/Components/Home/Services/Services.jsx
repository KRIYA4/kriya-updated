import React from "react";
import { useContext } from "react";
import "./Services.css";
import themeContext  from "../../../Theme/ThemeContext";
function Services() {
  
  const { isDark, setTheme } = useContext(themeContext);
  return (
    <section id="services" className="services">
      <div className="container" data-aos="fade-up">
        <header className="text-center my-4 font-bold">
          <h5 style={{ color: "#3090f0" }} className="font-bold">OUR SERVICES</h5>
        </header>

        <div className="row" style={{color:isDark ? "white":"black" }}>
          <div className="col-lg-4" data-aos="fade-up" data-aos-delay="200">
            <div className="box">
              <img
                src={require("../../../Assets/Services/Service1.jpg")}
                className="img-fluid"
                alt=""
              />
              <h3>Work with the right influencers</h3>
              <p>
                Find and recruit creators who are a good fit for your brand and
                your audience. Manage all your influencer relationships in one
                page and follow each stage of Collaborations
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="box">
              <img
                src={require("../../../Assets/Services/Service2.jpg")}
                className="img-fluid"
                alt=""
              />
              <h3>Our Store streamlines your campaign</h3>
              <p>
                Every influencer gets their own store with products from brands
                he’s working with. Our specialized store adds another layer of
                influencer to the audience and streamlined affiliate channel
              </p>
            </div>
          </div>

          <div
            className="col-lg-4 mt-4 mt-lg-0"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <div className="box">
              <img
                src={require("../../../Assets/Services/Service3.jpg")}
                className="img-fluid"
                alt=""
              />
              <h3>Scale your brand and Track Sales</h3>
              <p>
                Measure your campaign’s success with advanced analytics.
                Calculate your ROI, total earned media value, impressions, and
                summary of all media engagements. Keep track of overall campaign
                performance and individual influencer sales with tracked links
                and native e-commerce integrations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
