import {
  brainwaveServices,
  brainwaveServicesIcons,
} from "../constants/constants";
import {
  Gradient,
  PhotChatMessage,
  VideoChatMessage,
  VideoBar,
} from "../design/Services";
import FirstService from "./FirstService";

function Services() {
  return (
    <div className="relative flex flex-col items-center justify-center mt-60 gap-20">
      <div className="flex flex-col justify-center items-center gap-4">
        <h1 className="h1 font-normal">Generative AI made for creators.</h1>
        <p className="text-gray-400 text-center text-[1.2rem] font-thin">
          Brainwave unlocks the potential of AI-powered applications
        </p>
      </div>
      <FirstService />
    </div>
  );
}

export default Services;
