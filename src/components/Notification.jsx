import { notification1 } from "../assets";
import { notificationImages } from "../constants/constants";

function Notification() {
  return (
    <div
      className="h-[120px] w-full flex items-center justify-start gap-4
      bg-n-9/40 backdrop-blur p-4 rounded-2xl border border-gray-700"
    >
      <img
        className="h-[65px] rounded-xl"
        src={notification1}
        alt="notification"
      />
      <div className="flex flex-col w-full gap-1">
        <h6 className="font-bold">Code generation</h6>
        <div className="flex justify-between">
          <div>
            {notificationImages.map((item) => (
              <img
                className="w-[30px] inline rounded-full mr-1"
                src={item}
                alt={item}
              />
            ))}
          </div>
          <p className="opacity-[0.5]">1m ago</p>
        </div>
      </div>
    </div>
  );
}

export default Notification;
