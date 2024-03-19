import "../styles/RoadMaps.css";

function SingleRoadMap({
  status,
  statusImg,
  roadmapImg,
  roadmapName,
  roadmapDescription,
  containerBorder,
}) {
  return (
    <div
      id="singleRoadMapContainer"
      className={`w-full flex flex-col rounded-[40px] ${containerBorder}`}
    >
      <div className="flex justify-between w-full px-16 py-15">
        <p className="text-gray-400 text-[0.7rem] tracking-widest font-thin">
          [ MAY 2023 ]
        </p>
        <div
          className="w-fit bg-white text-black flex justify-around gap-3 rounded-[5px]
                     px-4 font-thin text-[0.7rem]"
        >
          <img className="w-[0.8rem]" src={statusImg} />
          {status}
        </div>
      </div>

      <img src={roadmapImg} alt={roadmapImg} />

      <div className="flex flex-col px-16 py-8 pb-20 gap-6">
        <h4 className="h4">{roadmapName}</h4>
        <p className="text-gray-500 font-thin">{roadmapDescription}</p>
      </div>
    </div>
  );
}

export default SingleRoadMap;
