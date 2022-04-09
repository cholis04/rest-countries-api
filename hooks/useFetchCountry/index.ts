import useSWR from 'swr';
import { getCountry } from '../../utils/Fetcher/FetcherCountries';

type countryType = {
  alpha3Code: string;
  borders: string[];
  capital: string;
  currencies: { name: string }[];
  flags: {
    png: string;
  };
  languages: { name: string }[];
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subregion: string;
  topLevelDomain: string[];
};

export const useFetchCountry = (
  keyParam: string,
  valParam: string | string[] | undefined
) => {
  let url: string | null = null;

  switch (keyParam) {
    case 'alpha3code':
      url = `https://restcountries.com/v2/alpha/${valParam}?fields=alpha3Code,borders,capital,currencies,flags,languages,name,nativeName,population,region,subregion,topLevelDomain`;
      break;
    default:
      break;
  }

  return useSWR<countryType>(valParam ? url : null, getCountry);
};
