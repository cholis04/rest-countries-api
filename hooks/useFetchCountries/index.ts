import useSWR from 'swr';
import { getCountry } from '../../utils/Fetcher/FetcherCountries';

type countryType = {
  alpha3Code: string;
  capital: string;
  flags: {
    png: string;
  };
  name: string;
  population: number;
  region: string;
};

export const useFetchCountries = () => {
  return useSWR<countryType[]>(
    'https://restcountries.com/v2/all?fields=alpha3Code,capital,flags,name,population,region',
    getCountry
  );
};
