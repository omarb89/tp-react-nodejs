import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBars } from '../service/barService.js';

const BarList = () => {
  const [bars, setBars] = useState([]);

  useEffect(() => {
    getBars().then(response => setBars(response.data));
  }, []);

  return (
    <div>
      <h1>Bars</h1>
      <Link to="/add-bar">Add Bar</Link>
      <ul>
        {bars.map(bar => (
          <li key={bar.id}>
            <Link to={`/bars/${bar.id}`}>{bar.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarList;
