import React from 'react';
import styled from 'styled-components';

import { useFetchCountries } from '../../hooks/useFetchCountries';
import CountryCard from '../CountryCard';

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

// Component
const CountryList: React.FC = () => {
  const { data: countries, error } = useFetchCountries();

  if (!countries)
    return (
      <ErrorLoadingSection aria-label="Loading Countries..">
        <ErrorLoadingText>Loading... </ErrorLoadingText>
      </ErrorLoadingSection>
    );

  if (error)
    return (
      <ErrorLoadingSection role="alert" aria-label="Failed to load Countries">
        <ErrorLoadingText>An error occurred</ErrorLoadingText>
      </ErrorLoadingSection>
    );

  return (
    <CountryListSection aria-label="List of Countries">
      <CountryCard countries={countries} />
    </CountryListSection>
  );
};

export default CountryList;
