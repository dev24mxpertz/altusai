import React from 'react';
import box1iconimage from "../assets/images/box1iconimage.png"
import box2iconimage from "../assets/images/box1iconimage2.png"

const HerosectionThird = () => {
  return (
    <div className="HerosectionThird_maincont">
      <div className="HerosectionThird_maincont_h1">
        in less than half the time against competitors
      </div>
      <div className="HerosectionThird_contentcont">
        <div className="HerosectionThird_contentcont_box">
          <div className="HerosectionThird_contentcont_box_imagecont">
            <img src={box1iconimage} alt="box1iconimage" />
          </div>
          <p className="HerosectionThird_contentcont_box_p">
            Greater improvements in productivity 
          </p>
        </div>
        <div className="HerosectionThird_contentcont_box">
          <div className="HerosectionThird_contentcont_box_imagecont">
            <img src={box2iconimage} alt="box2iconimage" />
          </div>
          <p className="HerosectionThird_contentcont_box_p">
            Greater improvements in productivity 
          </p>
        </div>
      </div>
    </div>
  );
}

export default HerosectionThird