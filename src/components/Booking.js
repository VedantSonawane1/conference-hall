import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Booking.css';  // Import the CSS file

const Booking = () => {
  const [bookings, setBookings] = useState([]);
  const [form, setForm] = useState({
    facilityId: '',
    startTime: '',
    endTime: ''
  });

  useEffect(() => {
    // Fetch user bookings
    const userId = 'google_user_id';  // Replace with actual userId from OAuth
    axios.get(`/bookings/user/${userId}`)
      .then(res => setBookings(res.data.bookings))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const bookingData = {
      userId: 'google_user_id',  // Replace with actual userId from OAuth
      facilityId: form.facilityId,
      startTime: form.startTime,
      endTime: form.endTime
    };

    axios.post('/bookings', bookingData)
      .then(res => console.log(res.data))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Create Booking</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="facilityId" placeholder="Facility ID" value={form.facilityId} onChange={handleChange} required />
        <input type="datetime-local" name="startTime" value={form.startTime} onChange={handleChange} required />
        <input type="datetime-local" name="endTime" value={form.endTime} onChange={handleChange} required />
        <button type="submit">Create Booking</button>
      </form>

      <h2>Your Bookings</h2>
      <ul>
        {bookings.map(booking => (
          <li key={booking.id}>
            {booking.facilityId} from {booking.startTime} to {booking.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Booking;
