import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { numberWithCommas } from '../../utils/FormatText/NumberWithCommas';
import { Filter } from '../../context/FilterContext';
import MarkText from '../MarkText';

// Styled Components
const ErrorLoadingSection = styled.section`
  width: 100%;
  min-height: 45vh;
  display: grid;
  place-items: center;
`;
const ErrorLoadingText = styled.p`
  text-align: center;
  font-size: 14px;
  color: var(--textPlaceHolder);

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
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
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
    }
  }
`;

const CountryCardDiv = styled.div`
  font-size: 14px;
  border-radius: 5px;
  overflow: hidden;
  background-color: var(--elementColor);
  color: var(--textColor);
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;
`;

const FlagImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: contain;
  object-position: center;
  border-bottom: 1px solid var(--textPlaceHolder);
  transition: all 0.2s ease-in;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
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
  color: var(--textValue);
`;

const TextKey = styled.b`
  font-weight: 700;
  color: var(--textColor);
`;

const CountryName = styled.a`
  display: block;
  font-weight: 800;
  font-size: 1.4em;
  line-height: 2em;
  margin-bottom: 0.4rem;
  color: var(--textColor);

  &:hover {
    text-decoration: underline;

    &::after {
      content: ' →';
    }
  }
`;

// types
type Props = {
  countries: {
    alpha3Code: string;
    capital: string;
    flags: {
      png: string;
    };
    name: string;
    population: number;
    region: string;
  }[];
};

// Component
const CountryCardList: React.FC<Props> = ({ countries }) => {
  const filter = useContext(Filter);
  const { keyword, region } = filter;

  // Filtered Data Countries
  const filtered = () => {
    // Only Keyword Country Name
    if (keyword !== '' && region === '')
      return countries.filter((country) =>
        country.name.toLowerCase().includes(keyword.toLowerCase())
      );

    // Only Region
    if (keyword === '' && region !== '')
      return countries.filter(
        (country) => country.region.toLowerCase() === region.toLowerCase()
      );

    // Keyword Country Name and Region
    if (keyword !== '' && region !== '')
      return countries
        .filter((country) =>
          country.name.toLowerCase().includes(keyword.toLowerCase())
        )
        .filter(
          (country) => country.region.toLowerCase() === region.toLowerCase()
        );

    // No Filter
    return countries;
  };

  const resolvedCountries = filtered();

  // If no country match
  if (resolvedCountries.length === 0)
    return (
      <ErrorLoadingSection aria-label="Country not found" role="alert">
        <ErrorLoadingText>Country not found </ErrorLoadingText>
      </ErrorLoadingSection>
    );

  return (
    <>
      <CountryListSection aria-label="List of Countries">
        {resolvedCountries.map((country) => {
          return (
            <CountryCardDiv key={country.name}>
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
                  <CountryName>
                    <MarkText keyword={keyword} text={country.name} />
                  </CountryName>
                </Link>
                <TextInfo>
                  <TextKey>Population : </TextKey>
                  {numberWithCommas(country.population)}
                </TextInfo>
                <TextInfo>
                  <TextKey>Region : </TextKey>
                  {country.region ? country.region : '-'}
                </TextInfo>
                <TextInfo>
                  <TextKey>Capital : </TextKey>
                  {country.capital ? country.capital : '-'}
                </TextInfo>
              </CountryInfo>
            </CountryCardDiv>
          );
        })}
      </CountryListSection>
    </>
  );
};

export default CountryCardList;
