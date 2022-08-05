import HeroSection from "./COMPONENTS/HeroSection";
import ImproveSkills from "./COMPONENTS/ImproveSkills";
import Navbar from "./COMPONENTS/Navbar";
import Quotes from "./COMPONENTS/Quotes";

function App() {
  return (
    <div>
      <Navbar />
      <div className="container main">
        <HeroSection />
        <ImproveSkills />
        <Quotes />
      </div>
    </div>
  );
}

export default App;
