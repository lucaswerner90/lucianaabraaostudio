import axios from 'axios';

const options = {
    baseURL: process.env.NEXT_PUBLIC_STRAPI_URL,
    timeout: 1000 * 20,
};
export default axios.create(options);