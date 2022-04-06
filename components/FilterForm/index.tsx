import React from 'react';
import styled from 'styled-components';

// style
const FormGroupFilter = styled.form`
  margin-top: 1.2rem;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      margin-top: 0rem;
    }
  }
`;

const SelectBox = styled.select`
  background-color: ${(props) => props.theme.elementColor};
  color: ${(props) => props.theme.textColor};
  font-size: 0.9em;
  font-weight: 500;
  padding: 1em 1.8em;
  border-radius: 5px;
  border: none;
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;
`;

const OptionSelect = styled.option`
  /* Hidden First Option */
  &:first-child {
    display: none;
  }
`;

// Component
const FilterForm = () => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
  };

  return (
    <FormGroupFilter name="filter-form">
      <SelectBox
        name="region"
        id="region"
        aria-label="Filter by Region"
        onChange={handleChange}
      >
        <OptionSelect value="">Filter by Region</OptionSelect>
        <OptionSelect value="all">All</OptionSelect>
        <OptionSelect value="afrika">Afrika</OptionSelect>
        <OptionSelect value="america">America</OptionSelect>
        <OptionSelect value="asia">Asia</OptionSelect>
        <OptionSelect value="europe">Europe</OptionSelect>
        <OptionSelect value="ocenia">Ocenia</OptionSelect>
      </SelectBox>
    </FormGroupFilter>
  );
};

export default FilterForm;
