import Chiefs from "./COMPONENTS/Chiefs";
import Footer from "./COMPONENTS/Footer";
import HeroSection from "./COMPONENTS/HeroSection";
import ImproveSkills from "./COMPONENTS/ImproveSkills";
import Navbar from "./COMPONENTS/Navbar";
import Quotes from "./COMPONENTS/Quotes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./PAGES/Home";
import Recipes from "./PAGES/Recipes";
import Settings from "./PAGES/Settings";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/recipes" element={ <Recipes /> } />
          <Route path="/settings" element={ <Settings /> } />
        </Routes>
      </div>
        <Footer />
    </Router>
  );
}

export default App;
