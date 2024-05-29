import axios from 'axios';

const API_URL = 'http://localhost:5000/bars';

export const getBars = () => axios.get(API_URL);
export const getBar = (id) => axios.get(`${API_URL}/${id}`);
export const createBar = (bar) => axios.post(API_URL, bar);
export const deleteBar = (id) => axios.delete(`${API_URL}/${id}`);
