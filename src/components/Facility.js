import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Facility = () => {
  const [facilities, setFacilities] = useState([]);
  const [newFacility, setNewFacility] = useState({
    name: '',
    location: '',
    capacity: ''
  });

  useEffect(() => {
    // Fetch facilities
    axios.get('/facilities')
      .then(res => setFacilities(res.data.facilities))
      .catch(err => console.error(err));
  }, []);

  const handleChange = (e) => {
    setNewFacility({ ...newFacility, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/facilities', newFacility)
      .then(res => setFacilities([...facilities, res.data]))
      .catch(err => console.error(err));
  };

  return (
    <div>
      <h2>Create Facility</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={newFacility.name} onChange={handleChange} required />
        <input type="text" name="location" placeholder="Location" value={newFacility.location} onChange={handleChange} required />
        <input type="number" name="capacity" placeholder="Capacity" value={newFacility.capacity} onChange={handleChange} required />
        <button type="submit">Create Facility</button>
      </form>

      <h2>All Facilities</h2>
      <ul>
        {facilities.map(facility => (
          <li key={facility.id}>
            {facility.name} ({facility.capacity}) at {facility.location}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Facility;
