import { check } from "../assets";
import "../styles/Services.css";
import GeneratingBtn from "./GeneratingBtn";

function FirstService() {
  return (
    <div
      id="firstServiceContainer"
      className="flex justify-center items-center border border-gray-700 rounded-3xl py-20 lg:p-0"
    >
      <div id="firstServiceBackground" />
      <div className="flex flex-col gap-8 w-full lg:w-[30%] p-10">
        <div>
          <h2 className="h4">Smartest AI</h2>
          <p className="text-gray-500 text-[0.8rem] lg:text-[1rem]">
            Brainwave unlocks the potential of AI-powered applications
          </p>
        </div>

        <div className="flex flex-col justify-start">
          <div className="flex justify-start items-center gap-2 border-t border-gray-600 py-1 lg:py-4">
            <img src={check} alt="check" />
            <h3 className="h6 font-thin text-[1rem]">Photo generating</h3>
          </div>
          <div className="flex justify-start items-center gap-2 border-t border-gray-600 py-1 lg:py-4">
            <img src={check} alt="check" />
            <h3 className="h6 font-thin text-[1rem]">Photo enhance</h3>
          </div>
          <div className="flex justify-start items-center gap-2 border-t border-gray-600 py-1 lg:py-4">
            <img src={check} alt="check" />
            <h3 className="h6 font-thin text-[1rem]">Seamless Integration</h3>
          </div>
        </div>
      </div>

      <GeneratingBtn className={"border border-gray-700"} />
    </div>
  );
}

export default FirstService;
