import { curve, heroBackground, robot } from "../assets";
import WhiteButton from "./WhiteButton";
import "../styles/Hero.css";
import { loading } from "../assets";
import { BackgroundCircles } from "../design/Hero";
import { yourlogo } from "../assets";
import { heroIcons } from "../constants/constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Notification from "./Notification";
import GeneratingBtn from "./GeneratingBtn";

function Hero() {
  const parallaxRef = useRef(null);

  return (
    <div
      id="hero"
      ref={parallaxRef}
      className={`relative z-2 overflow-hidden lg:overflow-visible mt-0 lg:mt-24 
                  p-4 lg:p-10 py-24 flex flex-col gap-28 justify-center items-center w-full`}
    >
      <div className="relative z-1 w-screen md:w-[100%] lg:max-w-[62rem] flex flex-col items-center justify-center gap-10">
        <div className="h1 text-center inline">
          Explore the Possibilities of&nbsp;AI&nbsp;Chatting with{" "}
          <h1 className="inline-block">
            Brainwave{" "}
            <img
              className="hidden lg:block"
              src={curve}
              alt="curve"
              width={440}
              height={50}
            />
            <img
              className="lg:hidden md:hidden"
              src={curve}
              alt="curve"
              width={230}
              height={50}
            />
            <img
              className="hidden lg:hidden md:block"
              src={curve}
              alt="curve"
              width={330}
              height={50}
            />
          </h1>
        </div>

        <h6 className="h6 lg:font-medium text-center text-n-3 lg:text-xl text-base font-thin w-[88%] lg:w-[70%]">
          Unleash the power of AI within Brainwave. Upgrade your productivity
          &nbsp;with&nbsp; Brainwave, the open AI chat app.
        </h6>
        <WhiteButton children={"GET STARTED"} />
      </div>

      <div
        className="relative flex justify-center items-center z-2 w-[105%] 
        lg:w-[1420px] lg:aspect-[1024/490] p-1 rounded-2xl bg-gradient-to-r from-blue-300 to-purple-400"
      >
        <div
          className="relative z-3 rounded-2xl aspect-[330/400]
                    overflow-hidden md:aspect-[688/490] lg:aspect-[1024/550] w-full lg:w-fit"
          id="robotImgContainer"
        >
          <img
            className="rounded-2xl w-full lg:w-[1410px] scale-[1.7] translate-y-[0%] md:scale-[1]
                         md:-translate-y-[10%] lg:-translate-y-[23%]"
            src={robot}
            alt="robot"
          />
          <GeneratingBtn />
        </div>

        <div className="hidden absolute top-80 z-5 -left-20 lg:flex items-center w-[350px]">
          <ScrollParallax isAbsolutelyPositioned>
            <ul
              className="h-full w-full flex items-center justify-between 
                        bg-n-9/40 backdrop-blur opacity-1 p-8 rounded-2xl
                        border border-gray-700"
            >
              {heroIcons.map((icon, index) => (
                <li className=" flex justify-center items-center" key={index}>
                  <img className="" src={icon} alt="" />
                </li>
              ))}
            </ul>
          </ScrollParallax>
        </div>

        <div className="hidden absolute top-60 z-5 -right-20 lg:flex items-center w-[400px]">
          <ScrollParallax isAbsolutelyPositioned>
            <Notification />
          </ScrollParallax>
        </div>
      </div>

      <div
        className="absolute overflow-x-hidden scale-[2] top-[50%] 
                    md:scale-[1.3] md:top-[42%]
                    lg:scale-[1.4] lg:top-[12%]"
      >
        <img
          className="lg:w-[1410px]"
          src={heroBackground}
          alt="heroBackground"
        />
      </div>

      <div className="relative z-20 flex flex-col w-full justify-center items-center gap-8 lg:gap-16">
        <h6 className="font-code text-gray-400 text-[10px] lg:text-[20px]">
          HELPING PEOPLE CREATE BEAUTIFUL CONTENT AT
        </h6>
        <div className="flex w-full justify-evenly">
          <img
            className="w-[80px] lg:w-[140px]"
            src={yourlogo}
            alt="yourlogo"
          />
          <img
            className="w-[80px] lg:w-[140px]"
            src={yourlogo}
            alt="yourlogo"
          />
          <img
            className="w-[80px] lg:w-[140px]"
            src={yourlogo}
            alt="yourlogo"
          />
          <img
            className="hidden lg:block lg:w-[140px]"
            src={yourlogo}
            alt="yourlogo"
          />
          <img
            className="hidden lg:block lg:w-[140px]"
            src={yourlogo}
            alt="yourlogo"
          />
        </div>
      </div>

      <BackgroundCircles />
    </div>
  );
}

export default Hero;
