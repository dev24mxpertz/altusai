import React, { useEffect } from "react";
import AboutsectionFirst from "./AboutPages/AboutsectionFirst";
import "./AboutPages/About.css";
import gsap from "gsap";
import AboutsectionSecond from "./AboutPages/AboutsectionSecond";
import AboutsectionThird from "./AboutPages/AboutsectionThird";
import AboutsectionFourth from "./AboutPages/AboutsectionFourth";
import AboutsectionFiFth from "./AboutPages/AboutsectionFiFth";

const AboutLayout = () => {
  useEffect(() => {
    gsap.set(".Layout_section", { opacity: "1", height: "auto" });
  }, []);

  return (
    <div className="Main_Layout_Container">
      <div className="Layout_section">
        <AboutsectionFirst />
      </div>
      <div className="Layout_section">
        <AboutsectionSecond />
      </div>
      <div className="Layout_section">
        <AboutsectionThird />
      </div>
      <div className="Layout_section">
        <AboutsectionFourth />
      </div>
      <div className="Layout_section">
        <AboutsectionFiFth />
      </div>
    </div>
  );
};

export default AboutLayout;
