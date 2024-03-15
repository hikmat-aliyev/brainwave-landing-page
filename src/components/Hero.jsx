import { curve, heroBackground, robot } from "../assets";
import WhiteButton from "./WhiteButton";
import "../styles/Hero.css";

function Hero() {
  return (
    <div
      className={`relative overflow-hidden z-1 mt-0 lg:mt-24 p-4 lg:p-10 py-24 flex flex-col gap-28 justify-center items-center border border-n-6 lg:bg-n-8/90 lg:backdrop-blur-sm w-full`}
    >
      <div className="relative z-1 w-screen lg:w-4/5 flex flex-col items-center justify-center gap-10">
        <h1 className="h1 text-center inline">
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
              curve
              width={230}
              height={50}
            />
            <img
              className="hidden lg:hidden md:block"
              src={curve}
              alt="curve"
              curve
              width={330}
              height={50}
            />
          </h1>
        </h1>

        <h6
          className="h6 lg:font-medium text-center text-n-3 lg:text-xl text-s font-thin"
          style={{ width: "70%" }}
        >
          Unleash the power of AI within Brainwave. Upgrade your productivity
          &nbsp;with&nbsp; Brainwave, the open AI chat app.
        </h6>
        <WhiteButton children={"GET STARTED"} />
      </div>

      <div
        className="relative flex justify-center items-center z-2 w-[105%] 
        lg:w-[90%] lg:aspect-[1024/490] p-1 rounded-2xl bg-gradient-to-r from-blue-300 to-purple-400"
      >
        <div
          className="relative z-3 rounded-2xl aspect-[330/400]
                    overflow-hidden md:aspect-[688/490] lg:aspect-[1024/550] w-full"
          id="robotImgContainer"
        >
          <img
            className="rounded-2xl w-full scale-[1.7] translate-y-[0%] md:scale-[1]
                         md:-translate-y-[10%] lg:-translate-y-[23%]"
            src={robot}
            alt="robot"
          />
        </div>
      </div>

      <div
        className="absolute z-0 scale-[2] top-[62%] left-[5%] 
                   md:top-[47%] md:scale-[1.3] md:left-[2%] 
                   lg:top-[13%] lg:left-[8%] lg:scale-[1.4]"
      >
        <img src={heroBackground} alt="heroBackground" />
      </div>
      {/* <div className="absolute border-2 border-red-500">
        <button>AI is generating</button>
      </div> */}
    </div>
  );
}

export default Hero;
