import React, { useState } from 'react';

const AddBarForm = ({ addBar }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBar = { name, description };
    fetch('http://localhost:3000/api/bars', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBar)
    })
      .then(response => response.json())
      .then(data => addBar(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bar Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Bar</button>
    </form>
  );
};

export default AddBarForm;
