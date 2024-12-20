import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/section/Section";
import About from "./components/about/About";
import Plan from "./components/plan/Plan";
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navbar barcha sahifalarda o'zgarmas qoladi */}
        <Navbar />

        {/* Routes orqali sahifalar almashtiriladi */}
        <Routes>
          <Route path="/" element={<Section />} />
          <Route path="/about" element={<About />} />
          <Route path="/plan" element={<Plan />} />
        </Routes>

        {/* Footer barcha sahifalarda o'zgarmas qoladi */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
