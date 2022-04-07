import React from 'react';
import { useRouter } from 'next/router';
import { BsArrowLeftShort } from 'react-icons/bs';
import styled from 'styled-components';

// Styled
const BackButtonStyled = styled.button`
  display: inline-flex;
  align-items: center;
  padding: 0.8em 2.4em;
  font-size: 0.8em;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  color: ${(props) => props.theme.textPlaceHolder};
  background-color: ${(props) => props.theme.elementColor};
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      font-size: 1em;
    }
  }
`;

const BackButton = () => {
  const router = useRouter();

  return (
    <BackButtonStyled onClick={() => router.back()} title="Previous Page">
      <BsArrowLeftShort /> Back
    </BackButtonStyled>
  );
};

export default BackButton;
