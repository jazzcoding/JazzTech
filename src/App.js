import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/index/header";
import Hero from "./components/index/hero";
import Software from "./components/index/softwares";
import Features from "./components/index/features";
import Testimonials from "./components/index/testimonials";
import Services from "./components/index/services";
import Footer from "./components/index/footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Software />
      <Features />
      <Services />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
