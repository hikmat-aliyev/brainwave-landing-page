import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Services from "./components/Services";

function App() {
  return (
    <div className="flex flex-col p-2 lg:p-10 md:p-8">
      <Navbar />
      <Hero />
      <Benefits />
      <Collaboration />
      <Services />
    </div>
  );
}

export default App;
