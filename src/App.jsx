import React from "react";
import ReservationCard from "./components/ReservationCard";
import Navbar from "./components/navbar";
import './index.css';
import CentralPart from "./components/centralpart";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-200 via-white to-blue-100 px-4 md:px-12 py-4">

       <Navbar />
      <CentralPart />
      <ReservationCard />
      <Footer />
      
      

    </div>
  );
}

export default App;
