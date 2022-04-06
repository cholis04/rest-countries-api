import styled, { css } from 'styled-components';

// CSS Include
export const Wrapper = css`
  margin: 0 auto;
  padding: 1.4em;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
`;

// Component
export const MainBox = styled.main`
  ${Wrapper}
  margin-bottom: 3.4rem;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      margin-top: 1rem;
    }
  }
`;

export const FilterSection = styled.section`
  position: relative;
  width: 100%;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 2rem;

  /* Desktop */
  @media only screen and (min-width: ${(props) => props.theme.screenDesktop}) {
    & {
      margin-bottom: 2.8rem;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
  }
`;
