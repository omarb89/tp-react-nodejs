import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { createOrder } from '../service/orderService.js';
import { getBars } from '../service/barService.js';

const OrderForm = () => {
  const [name, setName] = useState('');
  const [prix, setPrix] = useState(0);
  const [barId, setBarId] = useState('');
  const [bars, setBars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getBars().then(response => setBars(response.data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const order = { name, prix, barId };
    createOrder(order).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Nom:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Prix:</label>
        <input type="number" value={prix} onChange={(e) => setPrix(e.target.value)} required />
      </div>
      <div>
        <label>Bar:</label>
        <select value={barId} onChange={(e) => setBarId(e.target.value)} required>
          <option value="">Sélectionner un bar</option>
          {bars.map(bar => (
            <option key={bar.id} value={bar.id}>{bar.name}</option>
          ))}
        </select>
      </div>
      <button type="submit">Ajouter la commande</button>
    </form>
  );
};

export default OrderForm;
