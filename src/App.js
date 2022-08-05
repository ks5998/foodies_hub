import HeroSection from "./COMPONENTS/HeroSection";
import Navbar from "./COMPONENTS/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
