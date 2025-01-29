import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://swis.mouhannadabdalrhem.online/api',
  headers: {
    'Accept': 'application/json',
    'Authorization' : `Bearer ${localStorage.getItem('token')}`
  },
});

export default axiosInstance;