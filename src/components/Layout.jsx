import React from "react";
import HerosectionFirst from "./HerosectionFirst";
import HerosectionSecond from "./HerosectionSecond";
import HerosectionThird from "./HerosectionThird";
import HerosectionFourth from "./HerosectionFourth";
import HerosectionFifth from "./HerosectionFifth";
import Herosectionsixth from "./Herosectionsixth";
import Herosectionseventh from "./Herosectionseventh";

const Layout = () => {
  return (
    <div className="Main_Layout_Container">
      <div className="Layout_section">
        <HerosectionFirst />
      </div>
      <div className="Layout_section">
        <HerosectionSecond />
      </div>
      <div className="Layout_section">
        <HerosectionThird />
      </div>
      <div className="Layout_section">
        <HerosectionFourth />
      </div>
      <div className="Layout_section">
        <HerosectionFifth />
      </div>
      <div className="Layout_section">
        <Herosectionsixth />
      </div>
      <div className="Layout_section">
        <Herosectionseventh />
      </div>
    </div>
  );
};

export default Layout;
