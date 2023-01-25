import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const ENDPOINTS = {
  getAllUserCards: BASE_URL + '/api/usercards/'
};

const GET = (endpoint) => axios.get(endpoint);

export const API = { GET, ENDPOINTS };
