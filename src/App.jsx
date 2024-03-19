import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import RoadMap from "./components/RoadMap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="flex flex-col p-2 lg:p-10 md:p-8 overflow-hidden">
      <Navbar />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
      <Pricing />
      <RoadMap />
      <Footer />
    </div>
  );
}

export default App;
