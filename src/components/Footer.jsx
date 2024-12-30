import React from "react";
import logoimage from "../assets/images/Logo_image.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className="Footer_maincontainer">
        <div className="Footer_content_container1">
          <h1 className="Footer_content_container1_h1">ALTUS</h1>
          <p>
            123 <br />
            Innovation <br />
            St, Tech City,
            <br />
            Country
          </p>
        </div>
        <div className="Footer_content_container2">
          <Link className="Footer_content_container2_link">Instagram</Link>
          <Link className="Footer_content_container2_link">Linkedin</Link>
          <Link className="Footer_content_container2_link">Whatsapp</Link>
          <div className="Footer_content_container2_emaildiv">
            <p className="Footer_content_container2_emaildiv_p">
              General enquires
            </p>
            <span className="Footer_content_container2_emaildiv_span">
              support@example.com
            </span>
          </div>
          <div className="Footer_content_container2_emaildiv">
            <p className="Footer_content_container2_emaildiv_p">New business</p>
            <span className="Footer_content_container2_emaildiv_span">
              support@example.com
            </span>
          </div>
        </div>
        <div className="Footer_content_container3">
          <h1 className="Footer_content_container1_h1">
            subscribe to <br /> our newsletter
          </h1>
          <div className="Footer_content_container1_inputcont">
            <input
              className="Footer_content_container1_input"
              placeholder="Your E-mail"
            />
            <span className="Footer_content_container1_span">
              <i class="bi bi-arrow-right"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="FooterSub_container">
        <p className="FooterSub_container_p">
          2024 AI Solution . All right reserved{" "}
        </p>
        <div className="FooterSub_container_right">
          <Link className="FooterSub_container_right_link">
            Term and Condition
          </Link>
          <Link className="FooterSub_container_right_link">Privacy Policy</Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
