import axios from 'axios';

const api = axios.create({
  baseURL: 'https://happy-deploy-nlw03.herokuapp.com',
})

export default api;