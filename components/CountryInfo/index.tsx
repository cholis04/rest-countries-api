import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';

import { objectToStringCommas } from '../../utils/FormatText/ObjectToStringCommas';
import { numberWithCommas } from '../../utils/FormatText/NumberWithCommas';
import { arrayToStringCommas } from '../../utils/FormatText/ArrayToStringCommas';
import CountryBorder from '../CountryBorder';
import { useFetchCountry } from '../../hooks/useFetchCountry';

// Styled
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

const CountryInfoSection = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
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
  color: var(--textColor);
  font-size: 1.6em;
  font-weight: 800;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
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
  color: var(--textValue);
  line-height: 2em;
  font-weight: 400;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      font-size: 1em;
    }
  }
`;

const EmptyBorder = styled.span`
  color: var(--textValue);
`;

const InfoBorder = styled.div`
  font-size: 0.9em;
  color: var(--textColor);
  line-height: 2em;
  font-weight: 400;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      font-size: 1em;
    }
  }
`;

const WrapperBorderCountry = styled.div`
  margin-top: 1rem;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      margin-top: 3rem;
    }
  }
`;

const InfoProps = styled.b`
  font-weight: 700;
  color: var(--textColor);
`;

// Component
const CountryInfo: React.FC = () => {
  const router = useRouter();
  const { alphacode } = router.query;

  const { data: country, error } = useFetchCountry('alpha3code', alphacode);

  if (error)
    return (
      <ErrorLoadingSection role="alert" aria-label="Failed to load Countries">
        <ErrorLoadingText>
          {error.name === 400 ? 'Country not found' : error.message}
        </ErrorLoadingText>
      </ErrorLoadingSection>
    );

  if (!country)
    return (
      <ErrorLoadingSection aria-label="Loading Countries..">
        <ErrorLoadingText>Loading... </ErrorLoadingText>
      </ErrorLoadingSection>
    );

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
              {country.region ? country.region : '-'}
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
              {country.topLevelDomain
                ? arrayToStringCommas(country.topLevelDomain)
                : ' -'}
            </InfoText>
            <InfoText>
              <InfoProps>Currencies: </InfoProps>
              {country.currencies
                ? objectToStringCommas(country.currencies)
                : ' -'}
            </InfoText>
            <InfoText>
              <InfoProps>Languages: </InfoProps>
              {country.languages
                ? objectToStringCommas(country.languages)
                : ' -'}
            </InfoText>
          </InfoItem>
        </WrapperInfo>

        <WrapperBorderCountry>
          <InfoBorder>
            <InfoProps>Border Countries: </InfoProps>
            {country.borders.length >= 1 ? (
              <CountryBorder borders={country.borders} />
            ) : (
              <EmptyBorder> -</EmptyBorder>
            )}
          </InfoBorder>
        </WrapperBorderCountry>
      </InfoArticle>
    </CountryInfoSection>
  );
};

export default CountryInfo;
