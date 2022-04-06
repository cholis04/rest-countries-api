import Link from 'next/link';
import React from 'react';

import styled from 'styled-components';

// styled
const CountryListSection = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(264px, 1fr));
  gap: 3rem;
  place-content: center;
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
  max-height: 180px;
  object-fit: cover;
  object-position: center;
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
  font-weight: 600;
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
      content: ' ↗';
    }
  }
`;

// Component
const CountryList = () => {
  return (
    <CountryListSection aria-label="List of Countries">
      <CountryCard>
        <FlagImage
          src="https://flagcdn.com/w320/ax.png"
          alt="Flag"
          title="Flag"
        />
        <CountryInfo>
          <Link href="#" passHref>
            <CountryName>Åland Islands</CountryName>
          </Link>
          <TextInfo>
            <TextKey>Population : </TextKey>28.875
          </TextInfo>
          <TextInfo>
            <TextKey>Region : </TextKey>Europe
          </TextInfo>
          <TextInfo>
            <TextKey>Capital : </TextKey>Mariehamn
          </TextInfo>
        </CountryInfo>
      </CountryCard>
    </CountryListSection>
  );
};

export default CountryList;
