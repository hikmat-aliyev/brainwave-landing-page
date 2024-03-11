import { brainwave } from "../assets";

function Navbar() {
  return (
    <div>
      <div>
        <img src={brainwave} alt="brain-wave-logo" width={190} />
      </div>

      <div>
        <button>FEATURES</button>
        <button>PRICING</button>
        <button>HOW TO USE</button>
        <button>ROADMAP</button>
      </div>

      <div></div>
    </div>
  );
}

export default Navbar;
