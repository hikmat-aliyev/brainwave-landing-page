import { useState } from "react";
import { brainwave } from "../assets";
import { navigation } from "../constants/constants";
import Button from "./Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "../design/MobileMenu";

function Navbar() {
  const [openNavigation, setOpenNavigation] = useState(false);

  return (
    <div
      className="fixed top-o left-0 w-full flex justify-between 
                items-center px-4 lg:px-8 opacity-0.5 h-24 border-b border-n-6 "
    >
      <div>
        <img src={brainwave} alt="brain-wave-logo" width={190} />
      </div>

      <div className="flex">
        {navigation.map((item) => (
          <a
            key={item.id}
            href={item.url}
            className={`hidden font-code lg:text-xs uppercase text-n-3
             transition-colors hover:text-n-1 font-semibold ${
               item.onlyMobile ? "lg:hidden" : ""
             } lg:flex px-10`}
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

      <div
        className="lg:hidden"
        onClick={() => setOpenNavigation(!openNavigation)}
      >
        <Button
          href="#hey"
          className={"lg:hidden p-0.5"}
          spanClass={"py-3 px-2.5"}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>

      {openNavigation && <HamburgerMenu />}
    </div>
  );
}

export default Navbar;
