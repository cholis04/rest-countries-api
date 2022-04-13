import React, { useContext } from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

import { Filter } from '../../context/FilterContext';

// Styled
const FormGroupSearch = styled.form`
  padding-left: 1.4em;
  width: 100%;
  max-width: 480px;
  background-color: var(--elementColor);
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      padding-left: 1.8em;
    }
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  color: var(--textColor);

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      font-size: 0.9em;
    }
  }
`;

const InputSearch = styled.input`
  width: 100%;
  padding: 1em 1.8em;
  background: none;
  font-weight: 500;
  border: none;
  outline: none;
  font-size: inherit;
  color: inherit;

  &::placeholder {
    color: var(--textPlaceHolder);
  }
`;

// Component
const SearchForm: React.FC = () => {
  const filter = useContext(Filter);

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    if (filter.setKeyword) {
      const value = e.currentTarget.value;
      filter.setKeyword(value.trim());
    }
  };

  return (
    <FormGroupSearch name="search-form">
      <InputGroup>
        <BsSearch />
        <InputSearch
          id="country"
          name="country"
          type="search"
          defaultValue={filter.keyword}
          aria-label="Name of Country"
          placeholder="Search for country..."
          onChange={handleChange}
        />
      </InputGroup>
    </FormGroupSearch>
  );
};

export default SearchForm;
