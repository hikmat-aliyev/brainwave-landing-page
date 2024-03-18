import { PhotChatMessage } from "../design/Services";

function SecondService() {
  return (
    <div
      id="secondServiceContainer"
      className="relative flex items-end justify-center border border-gray-700 rounded-3xl p-20"
    >
      <PhotChatMessage />
      <div className="flex flex-col gap-4">
        <h3 className="h3 w-[300px] lg:w-[500px]">Photo editing</h3>
        <p className="text-gray-300 w-[300px] lg:w-[700px]">
          Automatically enhance your photos using our AI app's photo editing
          feature. Try it now!
        </p>
      </div>
    </div>
  );
}

export default SecondService;
