import axios from 'axios';

// TODO: will be used later with the original API
const REACT_APP_API_TOKEN = process.env.REACT_APP_API_TOKEN;
// console.log(REACT_APP_API_TOKEN);

export const axiosClient = axios.create({
  // TODO: will be used later with the original API
  baseURL: 'https://6x8prpit9f.execute-api.us-east-1.amazonaws.com/api',
  headers: { 'x-api-key': REACT_APP_API_TOKEN || '' }
  // baseURL: 'http://localhost:3001/'
});
