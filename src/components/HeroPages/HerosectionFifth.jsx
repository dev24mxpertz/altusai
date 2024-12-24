import React from "react";
import box1iconimage6 from "../../assets/images/box1iconimage6.png";

const HerosectionFifth = () => {
  return (
    <div className="HerosectionFifth_maincont">
      <h1 className="HerosectionFifth_maincont_h1">Our suite of service</h1>
      <div className="HerosectionFifth_contentcont">
        <div className="HerosectionFifth_contentcont_box">
          <div className="HerosectionFifth_contentcont_box_imagecont">
            <img src={box1iconimage6} alt="box1iconimage" />
          </div>
          <h3 className="HerosectionFifth_contentcont_box_h3">
            AI ASSISTANT FOR CUSTOMER SERVICE
          </h3>
          <p className="HerosectionFifth_contentcont_box_p">
            Eliminate unique customer frustrations and operational issues to
            deliver a seamless experience that keeps them coming back, all while
            driving greater operational efficiency and productivity with the
            custom AI assistant for customer service.
          </p>
          <button className="HerosectionFifth_contentcont_box_button">
            Learn More
          </button>
        </div>
        <div className="HerosectionFifth_contentcont_box">
          <div className="HerosectionFifth_contentcont_box_imagecont">
            <img src={box1iconimage6} alt="box2iconimage" />
          </div>
          <h3 className="HerosectionFifth_contentcont_box_h3">
            AI WORKFORCE FOR BUSINESS OPERATIONS
          </h3>
          <p className="HerosectionFifth_contentcont_box_p">
            Imagine a workplace where challenges are met head-on, departments
            thrive, and employees are empowered to focus on creativity and
            innovation—all driven by custom AI solutions applicable throughout
            the value chain.
          </p>
          <button className="HerosectionFifth_contentcont_box_button">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HerosectionFifth;
