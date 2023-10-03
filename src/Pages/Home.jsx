import { useEffect, useRef } from "react";
import asset from '../Assets/KRIYA (2).mp4'
import {
  Navbar,
  Hero,
  About,
  Services,
  FAQ,
  ContactUs,
  Footer,
} from "../Components";
import Creators from "./Creators";
import Testimonial from "./Testimonial";

function Home() {
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
    <div style={{ flex: 1 }}>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Creators />
      <FAQ />
      <Testimonial />
      <div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <video
            style={{ maxWidth: "100%", width: "800px", borderRadius: '15px' }}
            playsInline
            loop
            muted
            controls
            alt="All the devices"
            src={asset}
            ref={videoEl}
          />
        </div>
        </div>
        <ContactUs />
        <Footer />
      </div>
      );
}

      export default Home;
