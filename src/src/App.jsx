import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { About, Contact, Home, Services } from "./components/pages";
import Scroll from "./components/SubPage/Scroll";
import Footer from "./components/SubPage/Footer";
import MisEspacios from "./components/SubPage/MisEspacios";
import Nosotros from "./components/SubPage/Nosotros"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      {/* <Scroll /> */}
      <Nosotros />
      <MisEspacios />
      <Footer />
    </div>
  );
}

export default App;
