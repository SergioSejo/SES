import axios from 'axios';

const statisticsApi = axios.create({
    baseURL: '/api/statistic'
})

export default statisticsApi;



