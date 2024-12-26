import React from 'react'
import logoimage from "../assets/images/Logo_image.png"
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="Footer_maincontainer">
      <div className="Footer_content_container1">
        <img
          className="Footer_content_container1_image"
          src={logoimage}
          alt="logoimage"
        />
        <p className="Footer_content_heading">Empowering Businesses with AI</p>
        <p className="Footer_content_heading_p">
          Our mission is to empower businesses with tools that enhance
          efficiency, streamline processes,
        </p>
      </div>
      <div className="Footer_content_container2">
        <p className="Footer_content_heading2">Quick Links</p>
        <div className="footer_link_div">
          <span>.</span>
          <Link className="footer_link_div_link">Home</Link>
        </div>
        <div className="footer_link_div">
          <span>.</span>
          <Link className="footer_link_div_link">ABOUT US</Link>
        </div>
        <div className="footer_link_div">
          <span>.</span>
          <Link className="footer_link_div_link">
            AI ASSISTANT FOR CUSTOMER SUPPORT
          </Link>
        </div>
        <div className="footer_link_div">
          <span>.</span>
          <Link className="footer_link_div_link">
            AI WORKFORCE FOR BACKEND OPERATIONS
          </Link>
        </div>
        <div className="footer_link_div">
          <span>.</span>
          <Link className="footer_link_div_link">CONTACT US</Link>
        </div>
      </div>
      <div className="Footer_content_container3">
        <p className="Footer_content_heading2"> Contact Details</p>
        <div className="footer_link_div2">
          <span>
            <i class="bi bi-envelope-fill"></i>
          </span>
          <Link className="footer_link_div_link">support@example.com</Link>
        </div>
        <div className="footer_link_div2">
          <span>
            <i class="bi bi-telephone-fill"></i>
          </span>
          <Link className="footer_link_div_link">+917894561230</Link>
        </div>
        <div className="footer_link_div2">
          <span>
            <i class="bi bi-geo-fill"></i>
          </span>
          <Link className="footer_link_div_link">
            123 Innovation St, Tech City, Country
          </Link>
        </div>
        <div className="footer_icondiv">
          <Link className="footer_icondiv_link">
            <i class="bi bi-instagram"></i>
          </Link>
          <Link className="footer_icondiv_link">
            <i class="bi bi-linkedin"></i>
          </Link>
          <Link className="footer_icondiv_link">
            <i class="bi bi-facebook"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer