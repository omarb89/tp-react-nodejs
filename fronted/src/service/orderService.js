import axios from 'axios';

const API_URL = 'http://localhost:5000/api/orders';

export const createOrder = (order) => axios.post(API_URL, order);
export const deleteOrder = (id) => axios.delete(`${API_URL}/${id}`);
