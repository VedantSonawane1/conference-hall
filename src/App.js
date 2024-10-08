import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Booking from './components/Booking';
import Facility from './components/Facility';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/img1.jpg')" }}>
        <Navbar />
        <main className="container mx-auto p-6 bg-white bg-opacity-80 rounded-lg mt-10">
          <Routes>
            <Route path="/auth" element={<Auth />} />
            <Route path="/bookings" element={<Booking />} />
            <Route path="/facilities" element={<Facility />} />
          </Routes>
        </main>
        <footer className="text-center text-white bg-gray-800 py-4 mt-10">
          <p>&copy; 2024 Booking Buddy. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
