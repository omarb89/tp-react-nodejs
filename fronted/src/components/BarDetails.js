import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const BarDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [bar, setBar] = useState(null);

  useEffect(() => {
    const fetchBar = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/bars/:id`);
        setBar(response.data);
      } catch (error) {
        console.error('Error fetching bar:', error);
      }
    };

    fetchBar();
  }, [id]);

  const handleDeleteBar = async () => {
    try {
      await axios.delete(`http://localhost:5000/bars/:id`);
      navigate('/');
    } catch (error) {
      console.error('Error deleting bar:', error);
    }
  };

  const handleDeleteOrder = async (orderId) => {
    try {
      await axios.delete(`http://localhost:5000/orders/${orderId}`);
      setBar(prevBar => ({
        ...prevBar,
        orders: prevBar.orders.filter(order => order.id !== orderId)
      }));
    } catch (error) {
      console.error('Error deleting order:', error);
    }
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
