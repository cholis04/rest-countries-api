import React from 'react';
import styled from 'styled-components';

import CountryCardList from '../CountryCardList';
import { useFetchCountries } from '../../hooks/useFetchCountries';

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
  color: var(--textPlaceHolder);

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      font-size: 16px;
    }
  }
`;

// Component
const CountryList: React.FC = () => {
  const { data: countries, error } = useFetchCountries();

  // Error
  if (error)
    return (
      <ErrorLoadingSection role="alert" aria-label="Failed to load Countries">
        <ErrorLoadingText>
          Sorry, looks like something went wrong.
        </ErrorLoadingText>
      </ErrorLoadingSection>
    );

  // Loading
  if (!countries)
    return (
      <ErrorLoadingSection aria-label="Loading Countries..">
        <ErrorLoadingText>Loading... </ErrorLoadingText>
      </ErrorLoadingSection>
    );

  return <CountryCardList countries={countries} />;
};

export default CountryList;
