import "../styles/RoadMaps.css";

function SingleRoadMap({ status, statusImg, roadmapImg }) {
  return (
    <div id="singleRoadMapContainer" className="w-[46vw] border flex flex-col">
      <div className="flex justify-between w-full px-16 py-15">
        <p>[ MAY 2023 ]</p>
        <div
          className="w-fit bg-white text-black flex justify-around gap-3 rounded-[5px]
                     px-4 font-thin text-[0.7rem]"
        >
          <img className="w-[0.8rem]" src={statusImg} />
          {status}
        </div>
      </div>

      <img src={roadmapImg} alt={roadmapImg} />
    </div>
  );
}

export default SingleRoadMap;
