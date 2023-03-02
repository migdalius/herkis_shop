import styled, { keyframes } from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 70px;
  background-color: #222;
`;

const CopyRight = styled.p`
  display: flex;
  justify-content: center;
  padding-top: 25px;
  font-size: 16px;
  color: #fff;
`;

const Footer = () => {
  return (
    <MainContainer>
      <CopyRight>Copyright © 2023 - wszelkie prawa zastrzeżone</CopyRight>
    </MainContainer>
  );
};

export default Footer;
