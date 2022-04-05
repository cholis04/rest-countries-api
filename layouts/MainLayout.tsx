import styled from 'styled-components';

const HeaderDiv = styled.header`
  background-color: red;
`;
const MainLayout: React.FC = ({ children }) => {
  const component = (
    <>
      <HeaderDiv>Header</HeaderDiv>
      {children}
      <footer>Footer</footer>
    </>
  );

  return component;
};

export default MainLayout;
