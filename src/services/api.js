import axios from 'axios';
import md5 from 'md5';

const ts = Number(new Date());
const publicApiKey = '1f8d1ff44e32859d7842082f62c0c6da';
const privateApiKey = '';
const hash = md5(ts + privateApiKey + publicApiKey);

const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publicApiKey,
    hash,
  },
});

export default api;