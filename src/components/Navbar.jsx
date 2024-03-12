import { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants/constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div
      className="fixed top-o left-0 w-full flex justify-between 
                items-center px-8 opacity-0.5 h-24 border-b border-solid border-gray-400"
    >
      <div>
        <img src={brainwave} alt="brain-wave-logo" width={190} />
      </div>

      <div>
        {navigation.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className={`font-code lg:text-xs uppercase text-n-3
             transition-colors hover:text-n-1 font-semibold ${
               item.onlyMobile ? "lg:hidden" : ""
             } px-10`}
          >
            {item.title}
          </a>
        ))}
      </div>

      <div className="hidden lg:flex justify-between items-center">
        <a
          className="lg:text-xs text-n-3 transition-colors hover:text-n-1 font-semibold mr-10 text-2xl"
          href="#signup"
        >
          NEW ACCOUNT
        </a>
        <Button>Sign in</Button>
      </div>

      <Button href="#hey" className={"lg:hidden"}>
        <MenuSvg />
      </Button>
    </div>
  );
}

export default Navbar;
