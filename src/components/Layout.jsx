import React, { useEffect, useState } from "react";
import HerosectionFirst from "./HeroPages/HerosectionFirst";
import HerosectionSecond from "./HeroPages/HerosectionSecond";
import HerosectionThird from "./HeroPages/HerosectionThird";
import HerosectionFourth from "./HeroPages/HerosectionFourth";
import HerosectionFifth from "./HeroPages/HerosectionFifth";
import Herosectionsixth from "./HeroPages/Herosectionsixth";
import Herosectionseventh from "./HeroPages/Herosectionseventh";
import Logo_image from "../assets/images/Logo_image.png";
import gsap from "gsap";

const Layout = () => {
  const [loadingNumber, setLoadingNumber] = useState("00");

  useEffect(() => {
    const loadingWindowAnimation = gsap.timeline({ paused: true });

    loadingWindowAnimation
      .to(".Loading_overlaydiv", {
        width: "100%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 1,
        ease: "power2.in",
        duration: 0.5,
      })
      .to(".Loading_container", {
        height: 0,
        opacity: 0,
        duration: 0.1,
        display:"none",
        ease: "power2.out",
      })
      .to(".Layout_section", {
        opacity: 1,
        height: "auto",
        duration: 0.1,
        ease: "power2.out",
        stagger: 0.1,
      })
      .to(".Loading_overlaydiv", {
        left: "100%",
        transform: "translate(-50%, -50%)",
        opacity: 0,
        width: "0%",
        ease: "power2.out",
        duration: 0.3,
      })
      .set(".Loading_overlaydiv", { display: "none" });


    const loadingNumberTimeline = gsap.timeline({
      onUpdate: () => {
        const progress = Math.floor(loadingNumberTimeline.progress() * 100);
        setLoadingNumber(progress.toString().padStart(2, "0"));
      },
      onComplete: () => {
        loadingWindowAnimation.play();
      },
    });

    loadingNumberTimeline.to({}, { duration: 3 });
      return () => {
      loadingWindowAnimation.kill();
    };
  }, []);

  return (
    <div className="Main_Layout_Container">
      <div className="Loading_container">
        <img src={Logo_image} className="image_container" alt="Logo" />
        <div className="Loading_Number_div">{loadingNumber}</div>
      </div>
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
      <div className="Loading_overlaydiv"></div>
    </div>
  );
};

export default Layout;
