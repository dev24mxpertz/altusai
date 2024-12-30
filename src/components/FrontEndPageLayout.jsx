import React, { useEffect } from "react";
import "./FrontEndPages/FrontEndPage.css";
import gsap from "gsap";
import FrontendsectionFirst from "./FrontEndPages/FrontendsectionFirst";
import FrontendsectionSecond from "./FrontEndPages/FrontendsectionSecond";
import FrontendsectionThird from "./FrontEndPages/FrontendsectionThird";
import FrontendsectionFourth from "./FrontEndPages/FrontendsectionFourth";
import FrontendsectionFifth from "./FrontEndPages/FrontendsectionFifth";
import Frontendsectionsixth from "./FrontEndPages/Frontendsectionsixth";
import Frontendsectionseventh from "./FrontEndPages/Frontendsectionseventh";
import Frontendsectioneight from "./FrontEndPages/Frontendsectioneight";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const FrontEndPageLayout = () => {
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
        onComplete: () => {
          gsap.set(".Loading_overlaydiv", { opacity: "0", display: "none" });
        },
      });
    console.log("-------CloseMenuWindowAnimation playing ");
    CloseMenuWindowAnimation.play();
  };

  return (
    <>
      <div className="Main_Layout_Container">
        <div className="Layout_section">
          <FrontendsectionFirst />
        </div>
        <div className="Layout_section">
          <FrontendsectionSecond />
        </div>
        <div className="Layout_section">
          <FrontendsectionThird />
        </div>
        <div className="Layout_section">
          <FrontendsectionFourth />
        </div>
        <div className="Layout_section">
          <FrontendsectionFifth />
        </div>
        <div className="Layout_section">
          <Frontendsectionsixth />
        </div>
        <div className="Layout_section">
          <Frontendsectionseventh />
        </div>
        <div className="Layout_section">
          <Frontendsectioneight />
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

export default FrontEndPageLayout;
