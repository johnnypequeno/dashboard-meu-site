import axios from 'axios';

const api = axios.create({
  baseURL: 'https://json-server-node-qaj2.onrender.com',
});

export default api;