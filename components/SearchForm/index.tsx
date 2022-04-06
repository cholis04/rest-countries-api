import React from 'react';
import { BsSearch } from 'react-icons/bs';
import styled from 'styled-components';

// Styled
const FormGroupSearch = styled.form`
  padding-left: 1.4em;
  width: 100%;
  max-width: 480px;
  background-color: ${(props) => props.theme.elementColor};
  border-radius: 5px;
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      padding-left: 1.8em;
    }
  }
`;

const InputGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  color: ${(props) => props.theme.textColor};

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
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
    color: ${(props) => props.theme.textPlaceHolder};
  }
`;

// Component
const SearchForm = () => {
  return (
    <FormGroupSearch name="search-form">
      <InputGroup>
        <BsSearch />
        <InputSearch
          id="country"
          name="country"
          type="search"
          aria-label="Name of Country"
          placeholder="Search for country..."
        />
      </InputGroup>
    </FormGroupSearch>
  );
};

export default SearchForm;
