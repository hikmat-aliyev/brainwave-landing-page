import { loading } from "../assets";

function GeneratingBtn({ className }) {
  return (
    <div
      className={`absolute z-4 top-[90%] left-[50%] transform -translate-x-1/2 -translate-y-1/2
                          bg-black bg-opacity-80 lg:w-[50%] lg:text-lg text-start lg:p-4
                          text-xs  w-[70%] rounded-3xl p-2 ${className}`}
    >
      <button className="flex justify-start items-center gap-4">
        <img
          id="loadingImg"
          className="lg:w-[12%] w-[9%] h-[90%]"
          src={loading}
          alt="loading"
        />{" "}
        AI is generating...
      </button>
    </div>
  );
}

export default GeneratingBtn;
