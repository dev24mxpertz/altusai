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

const FrontEndPageLayout = () => {
  useEffect(() => {
    gsap.set(".Layout_section", { opacity: "1", height: "auto" });
  }, []);

  return (
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
    </div>
  );
};

export default FrontEndPageLayout;
