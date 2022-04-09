import axios from 'axios';

const getCountry = (url: string) => axios.get(url).then((res) => res.data);

export { getCountry };
