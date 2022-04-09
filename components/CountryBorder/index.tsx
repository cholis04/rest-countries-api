import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';
import { getAllCountries } from '../../utils/Fetcher/FetcherCountries';

const BorderItemSpan = styled.a`
  display: inline-block;
  margin: 0.3rem 0;
  margin-right: 0.4rem;
  padding: 0.1em 0.8em;
  border: 1px solid blue;
  border: 5px;
  font-weight: 600;
  font-size: 0.9em;
  color: ${(props) => props.theme.textPlaceHolder};
  background-color: ${(props) => props.theme.elementColor};
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;

  &:nth-child(2) {
    margin-left: 0.8rem;
  }
`;

type props = {
  borders: string[];
};

type countryType = {
  name: string;
  alpha3Code: string;
};

const CountryBorder: React.FC<props> = ({ borders }) => {
  const { data, error } = useSWR<countryType[]>(
    'https://restcountries.com/v2/all',
    getAllCountries
  );

  if (!data) return <p>Loading</p>;

  if (error) return <p>There is Error</p>;

  return (
    <>
      {borders.map((border) => {
        const countryByBorder = data.find((data) => data.alpha3Code === border);

        return (
          <Link
            href={`./${countryByBorder?.alpha3Code.toLowerCase()}`}
            passHref
            key={border}
          >
            <BorderItemSpan>{countryByBorder?.name}</BorderItemSpan>
          </Link>
        );
      })}
    </>
  );
};

export default CountryBorder;
