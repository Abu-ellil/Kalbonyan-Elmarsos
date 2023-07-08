import Navbar from "./components/Navbar";
import Home from './components/Home'
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ToTopButton from "./components/ToTopButton";
import Lottie from "lottie-react";
import "./style/style.css";
import "../src/App.css";
function App() {
  return (
    <div className="app">
      <Navbar />
      <Home Lottie={Lottie} />
      <About />
      <Services />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
      <ToTopButton />
    </div>
  );
}

export default App;
