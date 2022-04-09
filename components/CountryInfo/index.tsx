import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import useSWR from 'swr';

import { getCountryByAlphaCode } from '../../utils/Fetcher/FetcherCountries';
import { objectToStringCommas } from '../../utils/FormatText/ObjectToStringCommas';
import { numberWithCommas } from '../../utils/FormatText/NumberWithCommas';
import { arrayToStringCommas } from '../../utils/FormatText/ArrayToStringCommas';
import CountryBorder from '../CountryBorder';

// Styled
const CountryInfoSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
    }
  }
`;

const FlagImage = styled.img`
  width: 100%;
  object-fit: cover;
  object-position: center;

  box-shadow: ${(props) => props.theme.smallShadow};
`;

const InfoArticle = styled.article`
  font-size: 16px;
`;

const NameCountryHeading = styled.h2`
  color: ${(props) => props.theme.textColor};
  font-size: 1.6em;
  font-weight: 800;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      font-size: 2em;
    }
  }
`;

const WrapperInfo = styled.div`
  margin: 1.6rem auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  gap: 1rem;
`;

const InfoItem = styled.div`
  width: 100%;
`;

const InfoText = styled.p`
  font-size: 0.9em;
  color: ${(props) => props.theme.textColor};
  line-height: 2em;
  font-weight: 400;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      font-size: 1em;
    }
  }
`;

const WrapperBorderCountry = styled.div`
  margin-top: 1rem;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      margin-top: 3rem;
    }
  }
`;

const InfoProps = styled.b`
  font-weight: 700;
`;

type countryType = {
  name: string;
  borders: string[];
  nativeName: string;
  flags: {
    png: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string[];
  languages: { name: string }[];
  currencies: { name: string }[];
};

// Component
const CountryInfo = () => {
  const router = useRouter();
  const { alphacode } = router.query;

  const { data: country, error } = useSWR<countryType>(
    alphacode ? `https://restcountries.com/v2/alpha/${alphacode}` : null,
    getCountryByAlphaCode
  );

  if (!country) return <p>Loading</p>;

  if (error) return <p>There is Error</p>;

  return (
    <CountryInfoSection aria-label="Country Information">
      <FlagImage
        src={country.flags.png}
        alt={`Flag of ${country.name}`}
        title={`Flag of ${country.name}`}
      />
      <InfoArticle>
        <NameCountryHeading>{country.name}</NameCountryHeading>

        <WrapperInfo>
          <InfoItem>
            <InfoText>
              <InfoProps>Native Name: </InfoProps>
              {country.nativeName}
            </InfoText>
            <InfoText>
              <InfoProps>Population: </InfoProps>
              {numberWithCommas(country.population)}
            </InfoText>
            <InfoText>
              <InfoProps>Region: </InfoProps>
              {country.region}
            </InfoText>
            <InfoText>
              <InfoProps>Sub Region: </InfoProps>
              {country.subregion ? country.subregion : '-'}
            </InfoText>
            <InfoText>
              <InfoProps>Capital: </InfoProps>
              {country.capital ? country.capital : '-'}
            </InfoText>
          </InfoItem>

          <InfoItem>
            <InfoText>
              <InfoProps>Top Level Domain: </InfoProps>
              {arrayToStringCommas(country.topLevelDomain)}
            </InfoText>
            <InfoText>
              <InfoProps>Currencies: </InfoProps>
              {objectToStringCommas(country.currencies)}
            </InfoText>
            <InfoText>
              <InfoProps>Languages: </InfoProps>
              {objectToStringCommas(country.languages)}
            </InfoText>
          </InfoItem>
        </WrapperInfo>

        <WrapperBorderCountry>
          <InfoText>
            <InfoProps>Border Countries: </InfoProps>
            {country.borders ? (
              <CountryBorder borders={country.borders} />
            ) : (
              ' -'
            )}
          </InfoText>
        </WrapperBorderCountry>
      </InfoArticle>
    </CountryInfoSection>
  );
};

export default CountryInfo;