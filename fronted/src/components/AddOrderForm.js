import React, { useState } from 'react';

const AddOrderForm = () => {
  const [barId, setBarId] = useState('');
  const [beerId, setBeerId] = useState('');
  const [name, setName] = useState('');
  const [prix, setPrix] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newOrder = { barId, beerId, name, prix };
    fetch('http://localhost:3000/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newOrder)
    })
      .then(response => response.json())
      .then(data => console.log(data));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Bar ID"
        value={barId}
        onChange={(e) => setBarId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Beer ID"
        value={beerId}
        onChange={(e) => setBeerId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Order Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Price"
        value={prix}
        onChange={(e) => setPrix(e.target.value)}
        required
      />
      <button type="submit">Create Order</button>
    </form>
  );
};

export default AddOrderForm;
