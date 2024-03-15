import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/index/header";
import Hero from "./components/index/hero";
import Software from "./components/index/softwares";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Software />
    </div>
  );
}

export default App;
