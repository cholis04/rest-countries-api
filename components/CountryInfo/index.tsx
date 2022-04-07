import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

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

// Component
const CountryInfo = () => {
  return (
    <CountryInfoSection aria-label="Country Information">
      <FlagImage
        src="https://flagcdn.com/w320/ax.png"
        alt="Flag"
        title="Flag"
      />
      <InfoArticle>
        <NameCountryHeading>Åland Islands</NameCountryHeading>

        <WrapperInfo>
          <InfoItem>
            <InfoText>
              <InfoProps>Native Name: </InfoProps>Åland
            </InfoText>
            <InfoText>
              <InfoProps>Population: </InfoProps>28875
            </InfoText>
            <InfoText>
              <InfoProps>Region: </InfoProps>Europe
            </InfoText>
            <InfoText>
              <InfoProps>Sub Region: </InfoProps>Northern Europe
            </InfoText>
            <InfoText>
              <InfoProps>Capital: </InfoProps>Mariehamn
            </InfoText>
          </InfoItem>

          <InfoItem>
            <InfoText>
              <InfoProps>Top Level Domain: </InfoProps>.ax ,
            </InfoText>
            <InfoText>
              <InfoProps>Currencies: </InfoProps>Euro
            </InfoText>
            <InfoText>
              <InfoProps>Languages: </InfoProps>Swedish
            </InfoText>
          </InfoItem>
        </WrapperInfo>

        <WrapperBorderCountry>
          <InfoText>
            <InfoProps>Border Countries: </InfoProps>
            <Link href="#" passHref>
              <BorderItemSpan>French</BorderItemSpan>
            </Link>
            <Link href="#" passHref>
              <BorderItemSpan>Germany</BorderItemSpan>
            </Link>
            <Link href="#" passHref>
              <BorderItemSpan>Netherland</BorderItemSpan>
            </Link>
          </InfoText>
        </WrapperBorderCountry>
      </InfoArticle>
    </CountryInfoSection>
  );
};

export default CountryInfo;
