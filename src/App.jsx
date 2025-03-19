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
import KokanDetails from "../src/component/KokanDetails"
import GoaTour from "../src/component/GoaTour";
import Ashtavinayak from "./component/Ashtavinayak";
 import KeralaTours from "./component/KeralaTours";
 import MahabaleshwarPackages from "./component/MahabaleshwarPackages";
 import MahakumbhJourney from "./component/MahakumbhJourney";
 import LonavalaTour from "./component/LonavalaTour";
 import AdminDashboard from "./component/Admin/AdminDashboard";
import BookingForm from "./component/Admin/BookingForm";
import Login from "./component/Admin/Login";
import UserSide from "./component/Admin/UserSide";
import SeatLayout from "./component/Admin/SeatLayout";
import SlepperBooking  from "./component/Admin/SleeperPage/SlepperBooking";
import Sleeper  from "./component/Admin/SleeperPage/Sleeper";
import SlepperUser  from "./component/Admin/SleeperPage/SlepperUser";
import SeaterUser  from "./component/Admin/SleeperPage/SlepperUser";
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
          <Route path="/goa" element={<GoaTour />} />
          <Route path="/ashtavinayak" element={<Ashtavinayak/>} />
          <Route path="/kokan" element={<KokanDetails />} /> 
          <Route path="/mahabaleshwar" element={< MahabaleshwarPackages/>} /> 
          <Route path="/kumbh-mela" element={<MahakumbhJourney/>} />
          <Route path="/keral" element={<KeralaTours/>} />
          <Route path="/lonavala" element={<LonavalaTour/>} />
            <Route path="/admindashboard" element={<AdminDashboard />} />
            <Route path="/bookingform" element={<BookingForm />} />
          <Route path="/login" element={<Login />} />
         <Route path="/userside" element={<UserSide /> }/>
         <Route path="/seatlayout" element={<SeatLayout /> }/>
         <Route path="/slepperbooking" element={<SlepperBooking /> }/>
         <Route path="/sleeper" element={<Sleeper /> }/>
         <Route path="/slepperuser" element={<SlepperUser /> }/>
         <Route path="/seateruser" element={<SeaterUser /> }/>
       

        </Routes>

        {/* Floating Buttons are visible across all pages */}
        <WhatsappContact />

        <Footer />
      </div>
    </Router>
  );
};

export default App;
