import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Remplacez par l'URL de votre API

const getBars = () => {
  return axios.get(`${API_URL}/bars`);
};

const getBar = (id) => {
  return axios.get(`${API_URL}/bars/${id}`);
};

const createBar = (bar) => {
  return axios.post(`${API_URL}/bars`, bar);
};

const updateBar = (id, bar) => {
  return axios.put(`${API_URL}/bars/${id}`, bar);
};

const deleteBar = (id) => {
  return axios.delete(`${API_URL}/bars/${id}`);
};

export default {
  getBars,
  getBar,
  createBar,
  updateBar,
  deleteBar
};
