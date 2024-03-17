import { benefits } from "../constants/constants";

function Benefits() {
  return (
    <div className="flex flex-col justify-center items-center mt-0 lg:mt-20 relative z-3">
      <h2 className="h3 font-semibold w-[60%] text-center">
        Chat Smarter, Not Harder with Brainwave
      </h2>
      <div className="w-full flex flex-wrap justify-start p-10 gap-10">
        {benefits.map((item) => (
          <div className="w-[40%]">
            <div
              className="relative w-[500px] h-[450px] p-10 flex flex-col justify-between"
              style={{
                borderRadius: "8px 100px 8px 8px",
                boxShadow: "0 0 2px rgba(255, 255, 255, 0.1)",
              }}
            >
              <h4 className="h5">{item.title}</h4>
              <p className="text-gray-400">{item.text}</p>

              <img
                className="absolute z-50 top-0 left-0 w-full h-full
                           opacity-0 transition-opacity hover:opacity-[0.1]"
                style={{ borderRadius: "8px 100px 8px 8px" }}
                src={item.imageUrl}
                alt=""
              />
              <div className="flex justify-between items-center">
                <img src={item.iconUrl} alt="" />
                <p className="flex justify-center items-center font-code">
                  Explore more{" "}
                  <span className="material-symbols-outlined font-medium text-[30px]">
                    chevron_right
                  </span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Benefits;
