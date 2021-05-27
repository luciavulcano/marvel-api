import axios from 'axios';
import md5 from 'md5';

const ts = Number(new Date());
const publicApiKey = '';
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