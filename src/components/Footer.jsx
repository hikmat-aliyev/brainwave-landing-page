import { socials } from "../constants/constants";

function Footer() {
  return (
    <div className="flex flex-col lg:flex-row w-full justify-between items-center gap-4 pt-16 px-4 border-t border-gray-800 mt-[150px]">
      <div className=" text-[0.8rem] lg:text-[0.9rem] text-gray-500">
        &#169; 2024. All rights reserved
      </div>
      <div className="flex gap-4">
        {socials.map((item, index) => (
          <div key={index} className="w-fit p-2 lg:p-3 bg-n-7 rounded-full">
            <img src={item.iconUrl} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Footer;
