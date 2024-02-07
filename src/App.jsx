import Contact from "./components/Contact";
import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Support from "./components/Support";
import Footer from "./components/Footer";

function App() {
  return <div className=" mx-auto px-72 py-5 bg-black text-white ">
    <Navbar />
    <Hero />
    <Support />
    <About />
    <Contact />
    <Footer />
    <p className="text-center">&copy; 2024</p>
  </div>;
}

export default App;
