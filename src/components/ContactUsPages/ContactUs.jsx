import React, { useEffect } from "react";
import "./Contactus.css";

import botimage from "../../assets/images/aibotimagecontactis.png";
import Footer from "../Footer";
import gsap from "gsap";
import { Link } from "react-router-dom";

const ContactUs = () => {


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
          <div className="main_Contactus_container">
            <div className="Left_Contactus_container">
              <h1 className="Left_Contactus_container_h1">Get in touch</h1>
              <h2 className="Left_Contactus_container_h2">Get in touch</h2>
              <p className="Left_Contactus_container_p">
                We’d love to hear from you. Whether you have questions,
                feedback, or want to explore collaboration opportunities, reach
                out anytime!
              </p>
              <div className="Left_main_flexcontainer">
                <div className="Left_main_flexcontainer_left">
                  <span className="Left_main_flexcontainer_left_span">
                    <i class="bi bi-envelope-fill"></i>
                  </span>
                </div>
                <div className="Left_main_flexcontainer_right">
                  <span>SEND US A MESSAGE</span>
                  <p>support@example.com</p>
                </div>
              </div>
              <div className="Left_main_flexcontainer">
                <div className="Left_main_flexcontainer_left">
                  <span className="Left_main_flexcontainer_left_span">
                    <i class="bi bi-telephone-fill"></i>
                  </span>
                </div>
                <div className="Left_main_flexcontainer_right">
                  <span>GIVE US A CALL</span>
                  <p>+917894561230</p>
                </div>
              </div>
              <div className="Left_imageContainer">
                <img src={botimage} alt="botimage" />
              </div>
            </div>
            <div className="Right_Contactus_container">
              <form className="Right_Contactus_container_form">
                <div className="Right_Contactus_container_fieldcontainer">
                  <div className="Right_Contactus_container_inputcontainer">
                    <p>FIRST NAME</p>
                    <input
                      placeholder="Chris"
                      className="Right_Contactus_container_inputcontainer_input"
                    />
                  </div>
                  <div className="Right_Contactus_container_inputcontainer">
                    <p>LAST NAME</p>
                    <input
                      placeholder="Chris"
                      className="Right_Contactus_container_inputcontainer_input"
                    />
                  </div>
                </div>
                <div className="Right_Contactus_container_fieldcontainer">
                  <div className="Right_Contactus_container_inputcontainer">
                    <p>BUSINESS E-MAIL</p>
                    <input
                      placeholder="abc@gmail.com"
                      className="Right_Contactus_container_inputcontainer_input"
                    />
                  </div>
                  <div className="Right_Contactus_container_inputcontainer">
                    <p>PHONE</p>
                    <input
                      placeholder="1234567890"
                      className="Right_Contactus_container_inputcontainer_input"
                    />
                  </div>
                </div>
                <div className="Right_Contactus_container_fieldcontainer">
                  <div className="Right_Contactus_container_inputcontainer">
                    <p>COUNTRY CODE</p>
                    <input
                      placeholder="451155"
                      className="Right_Contactus_container_inputcontainer_input"
                    />
                  </div>
                  <div className="Right_Contactus_container_inputcontainer">
                    <p>SUBJECT OF INDUSTRY</p>
                    <input
                      placeholder="E-commerce"
                      className="Right_Contactus_container_inputcontainer_input"
                    />
                  </div>
                </div>
                <div className="Right_Contactus_container_fieldcontainer">
                  <div className="Right_Contactus_container_inputcontainer2">
                    <p>YOUR MESSAGE</p>
                    <input
                      placeholder="Type Here..."
                      className="Right_Contactus_container_inputcontainer_input2"
                    />
                  </div>
                </div>
                <button className="Right_Contactus_container_button">
                  Send
                </button>
              </form>
            </div>
          </div>
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

export default ContactUs;
