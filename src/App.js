import Chiefs from "./COMPONENTS/Chiefs";
import Footer from "./COMPONENTS/Footer";
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
        <Chiefs />
      </div>
        <Footer />
    </div>
  );
}

export default App;
