import React, { useEffect } from "react";
import AboutsectionFirst from "./AboutPages/AboutsectionFirst";
import "./AboutPages/About.css";
import gsap from "gsap";
import AboutsectionSecond from "./AboutPages/AboutsectionSecond";
import AboutsectionThird from "./AboutPages/AboutsectionThird";
import AboutsectionFourth from "./AboutPages/AboutsectionFourth";
import AboutsectionFiFth from "./AboutPages/AboutsectionFiFth";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const AboutLayout = () => {
  useEffect(() => {
    gsap.set(".Layout_section", { opacity: "1", height: "auto" });
  }, []);

  const handleopenmenu = () => {
    const OpenMenuWindowAnimation = gsap.timeline({ paused: true });
    OpenMenuWindowAnimation.to(".Loading_overlaydiv", {
      width: "100%",
      left: "50%",
      display: "initial",
      opacity: 1,
      ease: "power2.in",
      duration: 1,
    })
      .to(".Layout_section", {
        opacity: 0,
        height: "auto",
        duration: 0.4,
        ease: "power2.out",
      })
      .to(".Menu_container", {
        opacity: 1,
        duration: 0.4,
        display: "flex",
        ease: "power2.out",
      })
      .to(".Loading_overlaydiv", {
        left: "-150%",
        transform: "translate(-50%, -50%)",
        ease: "power2.out",
        duration: 1,
      });
    console.log("-------playing open menu");
    OpenMenuWindowAnimation.play();
  };

  const handleClosemenu = () => {
    const CloseMenuWindowAnimation = gsap.timeline({ paused: true });
    CloseMenuWindowAnimation.to(".Loading_overlaydiv", {
      width: "100%",
      left: "50%",
      display: "initial",
      opacity: 1,
      ease: "power2.in",
      duration: 1,
    })
      .to(".Layout_section", {
        opacity: 1,
        height: "auto",
        duration: 0.4,
        ease: "power2.out",
      })
      .to(".Menu_container", {
        opacity: 0,
        duration: 0.4,
        display: "none",
        ease: "power2.out",
      })
      .to(".Loading_overlaydiv", {
        left: "150%",
        transform: "translate(-50%, -50%)",
        ease: "power2.out",
        duration: 1,
      });
    console.log("-------CloseMenuWindowAnimation playing ");
    CloseMenuWindowAnimation.play();
  };

  return (
    <>
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
        <Footer />
        <span onClick={handleopenmenu} className="menubutton_span">
          <i class="bi bi-menu-up"></i>
        </span>
      </div>
      <div className="Loading_overlaydiv"></div>
      <div className="Menu_container">
        <span onClick={handleClosemenu} className="Menu_container_closebtn">
          <i class="bi bi-x-circle"></i>
        </span>
        <div className="Menu_container_contentbox">
          <div className="Menu_container_contentbox_left">
            <Link to="/" className="Menu_container_contentbox_left_link">
              Home
            </Link>
            <Link to="/Aboutus" className="Menu_container_contentbox_left_link">
              About Us
            </Link>
            <Link
              to="/ContactUs"
              className="Menu_container_contentbox_left_link"
            >
              Contact Us
            </Link>
          </div>
          <div className="Menu_container_contentbox_right">
            <Link
              to="/Frontend_AI"
              className="Menu_container_contentbox_right_link"
            >
              AI ASSISTANT FOR CUSTOMER SUPPORT
            </Link>
            <Link to="" className="Menu_container_contentbox_right_link">
              AI WORKFORCE FOR BACKEND OPERATIONS
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutLayout;
