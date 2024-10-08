import React, { useState } from 'react';

const Facility = () => {
  const [form, setForm] = useState({
    name: '',
    location: '',
    capacity: ''
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
      <h2 className="text-2xl text-center mb-4">Create Facility</h2>
      <form className="max-w-md mx-auto flex flex-col space-y-4" onSubmit={handleSubmit}>
        <input
          className="p-2 border border-gray-300 rounded"
          type="text"
          name="name"
          placeholder="Facility Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border border-gray-300 rounded"
          type="text"
          name="location"
          placeholder="Facility Location"
          value={form.location}
          onChange={handleChange}
          required
        />
        <input
          className="p-2 border border-gray-300 rounded"
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={form.capacity}
          onChange={handleChange}
          required
        />
        <button className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          Create Facility
        </button>
      </form>
    </div>
  );
};

export default Facility;
