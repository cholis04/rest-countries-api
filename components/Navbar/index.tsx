import React, { useContext } from 'react';
import styled from 'styled-components';
import { BsMoon, BsSunFill } from 'react-icons/bs';

import { Mode } from '../../context/ModeContext';
import { Wrapper } from '../../styles/sharedComponent';

const NavHeader = styled.header`
  background-color: ${(props) => props.theme.elementColor};
  box-shadow: ${(props) => props.theme.smallShadow};
  transition: all 0.2s ease-in-out;
`;

const WrapperNav = styled.div`
  /* include */
  ${Wrapper}

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TitleWeb = styled.h1`
  font-weight: 800;
  font-size: 1.2em;
  color: ${(props) => props.theme.textColor};

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      font-size: 1.5em;
    }
  }
`;

const ToggleMode = styled.button`
  border: none;
  border-bottom: 1px solid transparent;
  background: none;
  color: ${(props) => props.theme.textColor};
  font-size: 0.9em;
  font-weight: 700;
  display: flex;
  align-items: center;
  cursor: pointer;

  /* On Hover Desktop */
  @media (hover: hover) {
    &:hover {
      border-bottom: 1px solid ${(props) => props.theme.textColor};
    }
  }

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      font-size: 1em;
    }
  }
`;

const ToggleText = styled.span`
  margin-left: 0.3rem;
`;

const Navbar: React.FC = () => {
  const mode = useContext(Mode);

  return (
    <NavHeader>
      <WrapperNav>
        <TitleWeb>Where in the world?</TitleWeb>
        <ToggleMode onClick={mode?.toggleMode} title="Toggle Dark/Light Mode">
          {mode?.isDarkMode ? (
            <>
              <BsMoon />
              <ToggleText>Dark Mode</ToggleText>
            </>
          ) : (
            <>
              <BsSunFill />
              <ToggleText>Light Mode</ToggleText>
            </>
          )}
        </ToggleMode>
      </WrapperNav>
    </NavHeader>
  );
};

export default Navbar;
