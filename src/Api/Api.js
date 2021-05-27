import axios from 'axios';
require('dotenv').config();
const base_api_url = process.env.REACT_APP_API_URL;
const api_auth_token = process.env.REACT_APP_API_AUTH_TOKEN;

export const Api =  axios.create({
    baseURL: base_api_url,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "app-id":api_auth_token,
    }
});