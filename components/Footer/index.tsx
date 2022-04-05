import React from 'react';
import styled from 'styled-components';

// Styles
const FooterStyled = styled.footer`
  padding: 4rem 0;
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => props.theme.maxWidth};
`;

const AttributionDiv = styled.div`
  font-size: 12px;
  text-align: center;
  color: ${(props) => props.theme.textColor};
`;

const LinkAttribute = styled.a`
  text-decoration: underline;
  color: ${(props) => props.theme.textColor};
`;

const Footer = () => {
  return (
    <FooterStyled>
      <AttributionDiv>
        Challenge by{' '}
        <LinkAttribute
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </LinkAttribute>
        . Coded by{' '}
        <LinkAttribute
          href="https://github.com/cholis04"
          target="_blank"
          rel="noreferrer"
        >
          cholis04
        </LinkAttribute>
        .
      </AttributionDiv>
    </FooterStyled>
  );
};

export default Footer;
