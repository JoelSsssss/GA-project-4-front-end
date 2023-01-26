import axios from 'axios';
import { AUTH } from './auth';

const BASE_URL = 'http://localhost:8000';

const ENDPOINTS = {
  getAllUserCards: BASE_URL + '/api/usercards/',
  getAllTemplates: BASE_URL + '/api/templates/',
  login: '/api/auth/login/'
};

const getHeaders = () => ({
  headers: { Authorization: `Bearer ${AUTH.getToken()}` }
});

const GET = (endpoint) => axios.get(endpoint);
const POST = (endpoint, body, headers) =>
  headers ? axios.post(endpoint, body, headers) : axios.post(endpoint, body);
export const API = { GET, ENDPOINTS, POST, getHeaders };
