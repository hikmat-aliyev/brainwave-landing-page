import { Gradient, VideoChatMessage, VideoBar } from "../design/Services";
import { brainwaveServicesIcons } from "../constants/constants";

function ThirdService() {
  return (
    <div
      id="thirdServiceContainer"
      className="border border-gray-700 rounded-3xl h-fit p-4"
    >
      <div>
        <div className="flex flex-col gap-8 p-4 lg:p-8">
          <h4 className="h3">Video generation</h4>
          <p className="text-gray-400">
            The world’s most powerful AI photo and video art generation engine.
            What will you create?
          </p>
        </div>

        <div className="flex justify-around w-full py-10">
          {brainwaveServicesIcons.map((item, index) => (
            <div className="border border-gray-700 rounded-2xl p-2 lg:p-6 bg-n-6">
              <img src={item} alt="icon" width={25} />
            </div>
          ))}
        </div>
      </div>
      <div
        id="thirdServiceBg"
        className="relative w-[full] h-[57%] border border-gray-700 rounded-3xl"
      >
        <VideoChatMessage />
        <Gradient />
        <VideoBar />
      </div>
    </div>
  );
}

export default ThirdService;
