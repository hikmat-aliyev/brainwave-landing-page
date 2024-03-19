import { background } from "../assets";
import { navigation } from "../constants/constants";

export const Rings = () => {
  return (
    <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2">
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    </div>
  );
};

export const SideLines = () => {
  return (
    <>
      <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
      <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
    </>
  );
};

export const BackgroundCircles = () => {
  return (
    <>
      <div className="absolute top-[4.4rem] left-16 w-3 h-3 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[12.6rem] right-16 w-3 h-3 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
      <div className="absolute top-[26.8rem] left-12 w-6 h-6 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>
  );
};

export const HamburgerMenu = () => {
  return (
    <div className="absolute z-40 mt-20 inset-0 lg:hidden h-screen bg-n-8">
      <div className="border absolute inset-0 opacity-[0.03] h-screen w-screen">
        <img
          className="w-full h-full object-cover"
          src={background}
          width={688}
          height={953}
          alt="Background"
        />
      </div>
      <div
        className="absolute z-50 w-screen flex flex-col justify-center items-center gap-10"
        style={{ height: "80vh" }}
      >
        {navigation.map((item) => (
          <a
            onClick={() => console.log("dasdsa")}
            key={item.id}
            href={item.url}
            className={`font-code lg:text-xs uppercase text-n-3
             transition-colors hover:text-n-1 font-semibold lg:hidden px-10`}
          >
            {item.title}
          </a>
        ))}
      </div>

      <Rings />

      <SideLines />

      <BackgroundCircles />
    </div>
  );
};
