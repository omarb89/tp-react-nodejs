import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getBar, deleteBar } from '../service/barService.js';
import { deleteOrder } from '../service/orderService.js';

const BarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bar, setBar] = useState(null);

  useEffect(() => {
    getBar(id).then(response => setBar(response.data));
  }, [id]);

  const handleDeleteBar = () => {
    deleteBar(id).then(() => navigate('/'));
  };

  const handleDeleteOrder = (orderId) => {
    deleteOrder(orderId).then(() => {
      setBar({ ...bar, orders: bar.orders.filter(order => order.id !== orderId) });
    });
  };

  if (!bar) return <div>Loading...</div>;

  return (
    <div>
      <h1>{bar.name}</h1>
      <p>{bar.description}</p>
      <button onClick={handleDeleteBar}>Delete Bar</button>
      <h2>Orders</h2>
      <ul>
        {bar.orders.map(order => (
          <li key={order.id}>
            {order.name} - {order.status}
            <button onClick={() => handleDeleteOrder(order.id)}>Cancel Order</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BarDetail;
