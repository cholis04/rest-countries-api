import React from 'react';
import styled from 'styled-components';

// Styles
const FooterStyled = styled.footer`
  padding: 2rem 0;
  margin: 0 auto;
  width: 100%;
  max-width: var(--maxWidth);
`;

const AttributionDiv = styled.div`
  margin: 0 auto;
`;

const ParagraphAttribute = styled.p`
  font-size: 12px;
  line-height: 2em;
  text-align: center;
  color: var(--textColor);
`;

const LinkAttribute = styled.a`
  text-decoration: underline;
  font-weight: 600;
  color: var(--textColor);
`;

const Footer: React.FC = () => {
  return (
    <FooterStyled>
      <AttributionDiv>
        <ParagraphAttribute>
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
        </ParagraphAttribute>
        <ParagraphAttribute>
          Country Data from{' '}
          <LinkAttribute
            href="https://restcountries.com/#api-endpoints-v2"
            target="_blank"
            rel="noreferrer"
          >
            REST Countries V2 API
          </LinkAttribute>
          .
        </ParagraphAttribute>
      </AttributionDiv>
    </FooterStyled>
  );
};

export default Footer;
