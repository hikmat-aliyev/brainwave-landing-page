import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="flex flex-col p-2 lg:p-10 md:p-8">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
