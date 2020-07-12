import axios from 'axios';

console.log('Strapi API URL: ', process.env.NEXT_PUBLIC_STRAPI_URL);
const URL_OPTIONS = {
    baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
    timeout: 1000 * 20,
};

export default axios.create(URL_OPTIONS);



