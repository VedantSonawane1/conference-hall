import React, { useState } from 'react';

const Booking = () => {
  const [form, setForm] = useState({
    facilityId: '',
    startTime: '',
    endTime: ''
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (API call)
    console.log(form);
  };

  return (
    <div className="my-10">
      <h2 className="text-2xl text-center mb-4">Create Booking</h2>
      <form className="max-w-md mx-auto flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          className="p-2 border border-gray-300 rounded"
          type="text"
          name="facilityId"
          placeholder="Facility ID"
          value={form.facilityId}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border border-gray-300 rounded"
          type="datetime-local"
          name="startTime"
          value={form.startTime}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border border-gray-300 rounded"
          type="datetime-local"
          name="endTime"
          value={form.endTime}
          onChange={handleChange}
          required
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Create Booking
        </button>
      </form>
    </div>
  );
};

export default Booking;
