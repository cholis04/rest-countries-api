import React, { useContext } from 'react';
import styled from 'styled-components';

import { Filter } from '../../context/FilterContext';

// style
const FormGroupFilter = styled.form`
  margin-top: 1.2rem;
  margin-left: 0;
  display: flex;
  align-items: center;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      margin-left: 2rem;
      margin-top: 0rem;
    }
  }
`;

const SelectBox = styled.select`
  position: relative;
  background-color: var(--elementColor);
  color: var(--textColor);
  font-size: 0.8em;
  font-weight: 500;
  padding: 1em 1.8em;
  border-radius: 5px;
  border: none;
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      font-size: 0.9em;
    }
  }
`;

const OptionSelect = styled.option`
  /* Hidden First Option */
  &:first-child {
    display: none;
  }
`;

const ResetFilterButton = styled.input`
  background-color: #ff0011;
  border: none;
  color: white;
  margin-left: 1rem;
  font-size: 0.8em;
  font-weight: 500;
  border-radius: 5px;
  padding: 1em 1.8em;
  cursor: pointer;
  transition: all 0.2s ease-in;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      font-size: 0.9em;
    }

    &:hover {
      box-shadow: ${(props) => props.theme.smallShadow};
    }
  }
`;

// Component
const FilterForm: React.FC = () => {
  const filter = useContext(Filter);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (filter.setRegion) {
      filter.setRegion(e.target.value);
    }
  };

  const handleReset = () => {
    if (filter.setRegion) {
      filter.setRegion('');
    }
  };

  return (
    <FormGroupFilter name="filter-form" onReset={handleReset}>
      <SelectBox
        name="region"
        id="region"
        aria-label="Filter by Region"
        onChange={handleChange}
        value={filter.region}
      >
        <OptionSelect value="">Filter by Region</OptionSelect>
        <OptionSelect value="africa">Africa</OptionSelect>
        <OptionSelect value="americas">Americas</OptionSelect>
        <OptionSelect value="asia">Asia</OptionSelect>
        <OptionSelect value="europe">Europe</OptionSelect>
        <OptionSelect value="oceania">Oceania</OptionSelect>
      </SelectBox>
      {filter.region && (
        <ResetFilterButton
          type="reset"
          value="Reset Filter"
          aria-label="Remove Filter by Region"
          title="Reset Filter by Region"
        />
      )}
    </FormGroupFilter>
  );
};

export default FilterForm;
