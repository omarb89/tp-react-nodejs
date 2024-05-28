import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; // Assurez-vous que l'URL correspond à votre backend

export const getBars = () => axios.get(`${API_URL}/bars`);
export const getBarDetails = (id) => axios.get(`${API_URL}/bars/${id}`);
export const addBar = (bar) => axios.post(`${API_URL}/bars`, bar);
export const deleteBar = (id) => axios.delete(`${API_URL}/bars/${id}`);
export const getOrders = () => axios.get(`${API_URL}/orders`);
export const addOrder = (order) => axios.post(`${API_URL}/orders`, order);
export const cancelOrder = (id) => axios.delete(`${API_URL}/orders/${id}`);
export const getBeers = () => axios.get(`${API_URL}/beers`);
export const addBeer = (beer) => axios.post(`${API_URL}/beers`, beer);
