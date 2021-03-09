import { useEffect } from "react";

import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

// Animate on Scroll
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  // Initialize AOS
  useEffect(() => {
    Aos.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="app">
      <Header />
      <Home />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
