import React from 'react';
import Link from 'next/link';
import useSWR from 'swr';
import styled from 'styled-components';

import { getAllCountries } from '../../utils/Fetcher/FetcherCountries';
import { numberWithCommas } from '../../utils/FormatText/NumberWithCommas';

// styled
const ErrorLoadingSection = styled.section`
  width: 100%;
  min-height: 45vh;
  display: grid;
  place-items: center;
`;
const ErrorLoadingText = styled.p`
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme.textPlaceHolder};

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      font-size: 16px;
    }
  }
`;

const CountryListSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  place-content: center;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
    }
  }
`;

const CountryCard = styled.div`
  font-size: 14px;
  border-radius: 5px;
  overflow: hidden;
  background-color: ${(props) => props.theme.elementColor};
  color: ${(props) => props.theme.textColor};
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;
`;

const FlagImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  border-bottom: 1px dotted ${(props) => props.theme.textPlaceHolder};
  transition: all 0.2s ease-in;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      object-fit: scale-down;
      height: 180px;
    }
  }
`;

const CountryInfo = styled.div`
  padding: 1.6em;
  padding-bottom: 2em;
`;

const TextInfo = styled.p`
  line-height: 2em;
  font-weight: 400;
  color: ${(props) => props.theme.textColor};
`;

const TextKey = styled.b`
  font-weight: 700;
`;

const CountryName = styled.a`
  display: block;
  font-weight: 800;
  font-size: 1.4em;
  line-height: 2em;
  margin-bottom: 0.4rem;
  color: ${(props) => props.theme.textColor};

  &:hover {
    text-decoration: underline;

    &::after {
      content: ' →';
    }
  }
`;

type countryType = {
  name: string;
  population: number;
  flags: {
    png: string;
  };
  region: string;
  capital: string;
  alpha3Code: string;
};

// Component
const CountryList = () => {
  const { data, error } = useSWR<countryType[]>(
    'https://restcountries.com/v2/all',
    getAllCountries
  );

  if (!data)
    return (
      <ErrorLoadingSection aria-label="Loading Countries..">
        <ErrorLoadingText>Loading ... </ErrorLoadingText>
      </ErrorLoadingSection>
    );

  if (error)
    return (
      <ErrorLoadingSection role="alert" aria-label="Failed to load Countries">
        <ErrorLoadingText>Something went wrong</ErrorLoadingText>
      </ErrorLoadingSection>
    );

  return (
    <CountryListSection aria-label="List of Countries">
      {data.map((country) => {
        return (
          <CountryCard key={country.name}>
            <FlagImage
              src={country.flags.png}
              alt={`Flag of ${country.name}`}
              title={`Flag of ${country.name}`}
            />
            <CountryInfo>
              <Link
                href={`country/${country.alpha3Code.toLowerCase()}`}
                passHref
              >
                <CountryName>{country.name}</CountryName>
              </Link>
              <TextInfo>
                <TextKey>Population : </TextKey>
                {numberWithCommas(country.population)}
              </TextInfo>
              <TextInfo>
                <TextKey>Region : </TextKey>
                {country.region}
              </TextInfo>
              <TextInfo>
                <TextKey>Capital : </TextKey>
                {country.capital}
              </TextInfo>
            </CountryInfo>
          </CountryCard>
        );
      })}
    </CountryListSection>
  );
};

export default CountryList;
