import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Packages from "./pages/Packages.jsx";
import Itineraries from "./pages/Itineraries.jsx";
import Services from "./pages/Services.jsx";
import Gallery from "./pages/Gallery.jsx";
import Testimonials from "./pages/Testimonials.jsx";
import Contact from "./pages/Contact.jsx";

import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/itineraries" element={<Itineraries />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
