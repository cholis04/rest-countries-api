import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

// Styled
const ButtonScoll = styled.button`
  position: fixed;
  z-index: 99;
  bottom: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: none;
  border: none;
  color: ${(props) => props.theme.textPlaceHolder};
  font-size: 2em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

// Component
const ScrollToTop = () => {
  const [showButton, setShowButton] = useState(false);

  const handleScroll = () => {
    if (window.pageYOffset > 480) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {showButton && (
        <ButtonScoll
          title="Scroll to top"
          onClick={handleClick}
          aria-label="Scroll to top"
        >
          <BsFillArrowUpCircleFill />
        </ButtonScoll>
      )}
    </>
  );
};

export default ScrollToTop;
