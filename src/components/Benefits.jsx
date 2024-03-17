import { benefits } from "../constants/constants";

function Benefits() {
  return (
    <div className="flex flex-col justify-center items-center mt-0 lg:mt-20 relative z-3">
      <h2 className="h3 font-semibold w-[90%] lg:w-[60%] text-center">
        Chat Smarter, Not Harder with Brainwave
      </h2>
      <div className="w-full flex flex-wrap justify-start lg:p-10 gap-10">
        {benefits.map((item) => (
          <div className="md:w-[60%] lg:w-[40%]">
            <div
              className="relative md:h-[420px] lg:w-[500px] lg:h-[450px] py-8 px-4 lg:p-10 
                         flex flex-col justify-between gap-4 lg:gap-0"
              style={{
                borderRadius: "8px 100px 8px 8px",
                boxShadow: "0 0 2px rgba(255, 255, 255, 0.1)",
              }}
            >
              <p className="h6 lg:h5">{item.title}</p>
              <p className="text-gray-400 text-[18px] lg:text-[23px]">
                {item.text}
              </p>

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
