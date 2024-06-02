import axios from 'axios';

const API_URL = 'http://localhost:5000/beers';

export const getBeers = () => axios.get(API_URL);
export const getBeer = (id) => axios.get(`${API_URL}/${id}`);
export const createBeer = (beer) => axios.post(API_URL, beer);
export const deleteBeer = (id) => axios.delete(`${API_URL}/${id}`);

