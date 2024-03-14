import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col p-2 lg:p-10">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
