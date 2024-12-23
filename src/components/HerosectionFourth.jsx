import React from "react";
import box1iconimage3 from "../assets/images/box1iconimage3.png";
import box1iconimage4 from "../assets/images/box1iconimage4.png";
import box1iconimage5 from "../assets/images/box1iconimage5.png";



const HerosectionFourth = () => {
  return (
    <div className="HerosectionFourth_maincont">
      <h1 className="HerosectionFourth_maincont_h1">GEN AI IN ACTION</h1>
      <div className="HerosectionFourth_contentcont">
        <div className="HerosectionFourth_contentcont_box">
          <div className="HerosectionFourth_contentcont_box_imagecont">
            <img src={box1iconimage3} alt="box1iconimage" />
          </div>
          <h3 className="HerosectionFourth_contentcont_box_h3">
            3M Hours saved
          </h3>
          <p className="HerosectionFourth_contentcont_box_p">
            An agency saved 3 million operational hours using GenAI. 
          </p>
        </div>
        <div className="HerosectionFourth_contentcont_box">
          <div className="HerosectionFourth_contentcont_box_imagecont">
            <img src={box1iconimage4} alt="box2iconimage" />
          </div>
          <h3 className="HerosectionFourth_contentcont_box_h3">
            16M customer offerings
          </h3>
          <p className="HerosectionFourth_contentcont_box_p">
              A company delivered 16 million personalised offerings to their
            customers within 3 months. 
          </p>
        </div>
        <div className="HerosectionFourth_contentcont_box">
          <div className="HerosectionFourth_contentcont_box_imagecont">
            <img src={box1iconimage5} alt="box2iconimage" />
          </div>
          <h3 className="HerosectionFourth_contentcont_box_h3">+10% Revenue</h3>
          <p className="HerosectionFourth_contentcont_box_p">
            An insurer increased the potential revenue by 10% using AI in only
            one single function of the whole process. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default HerosectionFourth;
