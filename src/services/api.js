import axios from 'axios';

const api = axios.create({
    baseURL: 'https://us-central1-work-collab.cloudfunctions.net/api'
});

export default api;