import React, { useContext } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import { numberWithCommas } from '../../utils/FormatText/NumberWithCommas';
import { Filter } from '../../context/FilterContext';

// Styled Components
const CountryCardDiv = styled.div`
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
  border-bottom: 1px solid ${(props) => props.theme.textPlaceHolder};
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
  color: ${(props) => props.theme.textValue};
`;

const TextKey = styled.b`
  font-weight: 700;
  color: ${(props) => props.theme.textColor};
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
const CountryCard: React.FC<Props> = ({ countries }) => {
  const filter = useContext(Filter);

  return (
    <>
      {countries.map((country) => {
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
                <CountryName>{country.name}</CountryName>
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
    </>
  );
};

export default CountryCard;
