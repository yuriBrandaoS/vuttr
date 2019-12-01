import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3000';

async function getAllTools() {
  return axios.get('/tools')
    .then((response) => response)
    .catch((err) => console.error('getAllTools', err));
}

export default {
  getAllTools,
};
