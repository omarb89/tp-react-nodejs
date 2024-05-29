import React, { useState } from 'react';
import beerService from '../services/beerService';

const BeerOrder = () => {
  const [beer, setBeer] = useState({ name: '', quantity: 1 });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBeer((prevBeer) => ({ ...prevBeer, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await beerService.orderBeer(beer);
      console.log('Order submitted:', beer);
    } catch (error) {
      console.error('Error ordering beer:', error);
    }
  };

  return (
    <div>
      <h1>Order Beer</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Beer Name</label>
          <input
            type="text"
            name="name"
            value={beer.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity</label>
          <input
            type="number"
            name="quantity"
            value={beer.quantity}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Order Beer</button>
      </form>
    </div>
  );
};

export default BeerOrder;
