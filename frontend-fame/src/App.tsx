import "./App.css";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Cards } from "./components/Cards";
import { Jobs } from "./components/Jobs";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <Cards />
      <Jobs />
      <Footer />
    </>
  );
}

export default App;
