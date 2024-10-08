import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Auth from './components/Auth';
import Booking from './components/Booking';
import Facility from './components/Facility';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/bookings" element={<Booking />} />
        <Route path="/facilities" element={<Facility />} />
      </Routes>
    </Router>
  );
}

export default App;
