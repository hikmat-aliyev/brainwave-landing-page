import { roadmap } from "../constants/constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "../design/Roadmap";
import SingleRoadMap from "./SingleRoadMap";
import { roadmap1, roadmap2, roadmap3, roadmap4 } from "../assets";
import Button from "./Button";

function RoadMap() {
  const defaultBorder = "border border-gray-700 rounded-[20px]";

  return (
    <div className="relative flex flex-col items-center justify-center mt-60">
      <div className="flex flex-col w-full justify-center items-center">
        <p className="text-[0.4rem] lg:text-[0.7rem] text-gray-400 tracking-widest">
          [ READY TO GET STARTED ]
        </p>
        <h1 className="h2 text-center">What we’re working on</h1>
      </div>

      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-center gap-4">
        <div className="w-[90vw] md:w-[42vw] lg:w-[42vw] flex flex-col gap-4">
          <SingleRoadMap
            status={"DONE"}
            statusImg={check2}
            roadmapImg={roadmap1}
            roadmapName={"Voice recognition"}
            roadmapDescription={
              "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free."
            }
            containerBorder={defaultBorder}
            gradientBorder={"gradientBorder"}
          />
          <SingleRoadMap
            status={"DONE"}
            statusImg={check2}
            roadmapImg={roadmap3}
            roadmapName={"Chatbot customization"}
            roadmapDescription={
              "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with."
            }
            containerBorder={defaultBorder}
          />
        </div>
        <div className="w-[90vw] md:w-[42vw] lg:w-[42vw] md:mt-60 lg:mt-60 flex flex-col gap-4">
          <SingleRoadMap
            status={"IN PROGRESS"}
            statusImg={loading1}
            roadmapImg={roadmap2}
            roadmapName={"Gamification"}
            roadmapDescription={
              "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently."
            }
            containerBorder={defaultBorder}
          />
          <SingleRoadMap
            status={"IN PROGRESS"}
            statusImg={loading1}
            roadmapImg={roadmap4}
            roadmapName={"Integration with APIs"}
            roadmapDescription={
              "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations."
            }
            containerBorder={defaultBorder}
          />
        </div>
      </div>

      <Button children={"OUR ROADMAP"} className="w-fit border mt-[90px]" />

      <Gradient />
    </div>
  );
}

export default RoadMap;
