import { brainwaveSymbol, check } from "../assets";
import { collabApps } from "../constants/constants";
import Button from "./Button";
import { LeftCurve, RightCurve } from "../design/Collaboration";

function Collaboration() {
  return (
    <div
      className="mt-40 relative flex flex-col lg:flex-row items-center justify-between 
                 px-2 lg:px-24 gap-20 lg:gap-0"
    >
      <div className="w-full lg:w-[30%] flex flex-col gap-10">
        <h1 className="h1 lg:text-[60px] lg:leading-[70px] font-medium">
          AI Chat App for seamless collaboration
        </h1>
        <div>
          <h6 className="text-[22px] flex items-center gap-4 font-thin">
            <img
              className="flex items-center justify-center"
              src={check}
              alt={check}
            />
            Seamless Integration
          </h6>
          <p className="text-gray-400 font-thin mt-2">
            With smart automation and top-notch security, it's the perfect
            solution for teams looking to work smarter.
          </p>
        </div>
        <div>
          <h6 className="text-[22px] flex items-center gap-4 font-thin">
            <img
              className="flex items-center justify-center"
              src={check}
              alt={check}
            />
            Smart Automation
          </h6>
          <p className="text-gray-400 font-thin mt-2">
            With smart automation and top-notch security, it's the perfect
            solution for teams looking to work smarter.
          </p>
        </div>
        <div>
          <h6 className="text-[22px] flex items-center gap-4 font-thin">
            <img
              className="flex items-center justify-center"
              src={check}
              alt={check}
            />
            Top-notch Security
          </h6>
          <p className="text-gray-400 font-thin mt-2">
            With smart automation and top-notch security, it's the perfect
            solution for teams looking to work smarter.
          </p>
        </div>
        <Button className={"w-fit"}>TRY IT NOW</Button>
        <LeftCurve />
      </div>

      <div className="relative border border-n-9/100 w-[260px] h-[260px] lg:w-[500px] lg:h-[500px] rounded-full">
        {collabApps.map((item, index) => (
          <div
            className={`absolute top-0 w-full h-full rounded-full
            rotate-${index * 45}`}
          >
            <div
              key={index}
              className={`absolute border w-[42px] h-[42px] lg:w-[65px] lg:h-[65px] py-2 px-2 left-[47%]
                    rounded-lg border-n-9/100 bg-n-8 flex justify-center items-center
                    -rotate-${index * 45} -m-3`}
            >
              <img
                src={item.icon}
                alt={item}
                width={item.width}
                height={item.height}
              />
            </div>
          </div>
        ))}

        <div
          className="relative border w-fit h-fit p-8 lg:p-14 rounded-full border-n-9/100
                     top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="rounded-full bg-gradient-to-r from-blue-300 to-purple-400 w-fit p-0.5">
            <div className="rounded-full p-3 lg:p-8 bg-n-8">
              <img src={brainwaveSymbol} alt="" />
            </div>
          </div>
        </div>
        <RightCurve />
      </div>
    </div>
  );
}

export default Collaboration;
