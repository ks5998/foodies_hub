import HeroSection from "./COMPONENTS/HeroSection";
import ImproveSkills from "./COMPONENTS/ImproveSkills";
import Navbar from "./COMPONENTS/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
      </div>
    </div>
  );
}

export default App;
