import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const StyledLink = styled.a`
  display: inline-flex;
  align-items: center;
  margin-left: 1rem;
  padding: 0.8em 2.4em;
  font-size: 0.8em;
  font-weight: 600;
  border-radius: 5px;
  border: none;
  color: var(--textPlaceHolder);
  background-color: var(--elementColor);
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  /* Desktop */
  @media only screen and (min-width: ${(props) =>
      props.theme.media.screenDesktop}) {
    & {
      font-size: 1em;
    }
  }
`;

const HomeLink: React.FC = () => {
  return (
    <Link href="/" passHref>
      <StyledLink>All Countries ↗</StyledLink>
    </Link>
  );
};

export default HomeLink;
