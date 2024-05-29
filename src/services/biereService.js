import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Remplacez par l'URL de votre API

const orderBeer = (order) => {
  return axios.post(`${API_URL}/beers/order`, order);
};

export default {
  orderBeer
};
