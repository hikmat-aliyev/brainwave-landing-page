import {
  brainwaveServices,
  brainwaveServicesIcons,
} from "../constants/constants";

import FirstService from "./FirstService";
import SecondService from "./SecondService";
import ThirdService from "./ThirdService";

function Services() {
  return (
    <div
      id="how-to-use"
      className="relative flex flex-col items-center justify-center mt-60 gap-6"
    >
      <div className="flex flex-col justify-center items-center gap-4 mb-20">
        <h1 className="h1 font-normal">Generative AI made for creators.</h1>
        <p className="text-gray-400 text-center text-[1.2rem] font-thin">
          Brainwave unlocks the potential of AI-powered applications
        </p>
      </div>
      <FirstService />
      <div className="flex flex-col lg:flex-row gap-6">
        <SecondService />
        <ThirdService />
      </div>
    </div>
  );
}

export default Services;
