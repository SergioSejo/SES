import axios from 'axios';

const matchesApi = axios.create({
    baseURL: '/api/match'
})

export default matchesApi;



