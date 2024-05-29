import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createBar } from '../service/barService.js';

const BarForm = () => {
  const [name, setName] = useState('');
  const [adresse, setAdresse] = useState('');
  const [tel, setTel] = useState('');
  const [email, setEmail] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const bar = { name, adresse, tel, email, description };
    createBar(bar).then(() => navigate('/'));
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label>Adresse:</label>
        <input type="text" value={adresse} onChange={(e) => setAdresse(e.target.value)} />
      </div>
      <div>
        <label>Tel:</label>
        <input type="text" value={tel} onChange={(e) => setTel(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
      </div>
      <button type="submit">Add Bar</button>
    </form>
  );
};

export default BarForm;
