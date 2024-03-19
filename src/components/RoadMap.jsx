import { roadmap } from "../constants/constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "../design/Roadmap";
import SingleRoadMap from "./SingleRoadMap";
import { roadmap1, roadmap2, roadmap3, roadmap4 } from "../assets";

function RoadMap() {
  return (
    <div className="relative border-2 border-red-600">
      <SingleRoadMap status={"DONE"} statusImg={check2} roadmapImg={roadmap1} />
      <Gradient />
    </div>
  );
}

export default RoadMap;
