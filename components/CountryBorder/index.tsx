import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import { useFetchCountries } from '../../hooks/useFetchCountries';

const BorderItemSpan = styled.a`
  display: inline-block;
  margin: 0.3rem 0;
  margin-right: 0.4rem;
  padding: 0.1em 0.8em;
  border: 1px solid blue;
  border: 5px;
  font-weight: 600;
  font-size: 0.9em;
  color: var(--textPlaceHolder);
  background-color: var(--elementColor);
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;

  &:nth-child(2) {
    margin-left: 0.8rem;
  }
`;

const EmptyBorder = styled.span`
  color: var(--textValue);
`;

type Props = {
  borders: string[];
};

const CountryBorder: React.FC<Props> = ({ borders }) => {
  const { data, error } = useFetchCountries();

  if (!data) return <EmptyBorder>Loading...</EmptyBorder>;

  if (error) return <EmptyBorder>An error occurred</EmptyBorder>;

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
