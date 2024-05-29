import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import barService from '../services/barService';

const BarList = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    fetchBars();
  }, []);

  const fetchBars = async () => {
    try {
      const response = await barService.getBars();
      setBars(response.data);
    } catch (error) {
      console.error('Error fetching bars:', error);
    }
  };

  return (
    <div>
      <h1>Bars</h1>
      <Link to="/add-bar">Add Bar</Link>
      <ul>
        {bars.map((bar) => (
          <li key={bar.id}>
            {bar.name} - {bar.description} <Link to={`/edit-bar/${bar.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
      <Link to="/order-beer">Order Beer</Link>
    </div>
  );
};

export default BarList;
