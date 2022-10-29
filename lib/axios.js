import axios from 'axios';

export default axios.create({
    baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
    headers: {
        "Access-Control-Allow-Origin" : "*",
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true,
});