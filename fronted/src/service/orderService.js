// src/service/orderService.js
import axios from 'axios';

export const addBeerToOrder = (barId, beerId, quantity) => {
  return axios.post('http://localhost:5000/orders', { barId, beerId, quantity });
};

export const getOrdersByBar = (barId) => {
  return axios.get(`http://localhost:5000/orders?barId=${barId}`);
};

export const deleteOrder = (orderId) => {
  return axios.delete(`http://localhost:5000/orders/${orderId}`);
};
