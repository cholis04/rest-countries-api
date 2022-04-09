import axios from 'axios';

const getAllCountries = (url: string) => axios.get(url).then((res) => res.data);
const getCountryByAlphaCode = (url: string) =>
  axios.get(url).then((res) => res.data);

export { getAllCountries, getCountryByAlphaCode };
