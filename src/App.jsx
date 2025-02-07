import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Import all components
import JyotirlingaForm from "./component/JyotirlingaForm";
import Home from "./component/Home";  // Home Component
import About from "./component/AboutUs";
import Contact from "./component/Contact";
import TourPackages from "./component/TourPackages";
import JyotilingasDetails from "./component/JyotilinghasDetails";
import NavBar from "./component/NavBar";
import Footer from "./component/Footer";
import MainPage from "./component/MainPage/MainPage";
import WhatsappContact from "./component/Floating/WhatsappContact";

// New components for the tour pages
// import Goa from "./component/Goa"; 
// import Kokan from "./component/Kokan";
// import Mahabaleshwar from "./component/Mahabaleshwar";
// import KumbhMela from "./component/KumbhMela";
// import Ashtavinayak from "./component/Ashtavinayak"; 
// import Lonavala from "./component/Lonavala"; 
// import Kerala from "./component/Kerala"; 

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* Routes for Jyotilinghas */}
          <Route path="/jyotilinghas" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tour-packages" element={<TourPackages />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/jyotirlinga/:name" element={<JyotilingasDetails />} />
          <Route path="/jyotirlinga-form" element={<JyotirlingaForm />} />

          {/* Routes for new tours */}
          {/* <Route path="/goa" element={<Goa />} />
          <Route path="/kokan" element={<Kokan />} />
          <Route path="/mahabaleshwar" element={<Mahabaleshwar />} />
          <Route path="/kumbh-mela" element={<KumbhMela />} />
          <Route path="/ashtavinayak" element={<Ashtavinayak />} />
          <Route path="/lonavala" element={<Lonavala />} />
          <Route path="/keral" element={<Kerala />} /> */}
        </Routes>

        {/* Floating Buttons are visible across all pages */}
        <WhatsappContact />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
