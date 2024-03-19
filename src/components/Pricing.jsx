import { smallSphere, stars } from "../assets";
import PriceOffers from "./PriceOffers";

function Pricing() {
  return (
    <div className="flex flex-col items-center gap-20">
      <div className="relative flex items-center justify-center mt-40">
        <img className="absolute w-[12rem]" src={smallSphere} alt="sphere" />
        <img className="scale-[1.3]" src={stars} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="font-code text-gray-400">
          [ GET STARTED WITH BRAINWAVE ]
        </p>
        <h1 className="h1 font-normal">Pay once, use forever</h1>
      </div>

      <PriceOffers />

      <button className="underline tracking-wide">See full details</button>
    </div>
  );
}

export default Pricing;
