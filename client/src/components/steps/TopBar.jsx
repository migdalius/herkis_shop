import React from "react";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";

const TopBarContainer = styled.div`
  width: 100%;
  height: 120px;
  background-color: #08284a;

  border-radius: 10px 10px 0px 0px;
  color: #fff;
`;

const TopBarTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 20px;
  padding-top: 10px;
`;

const TopBarDesc = styled.div`
  padding-top: 5px;
  padding-bottom: 10px;
`;

const TopBarProcessContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 80%;
`;

const load = keyframes`
    0% {
    width: 0;
  }
  100% {
    width: 20%;
  }
`;

const TopBarProgressValue = styled.div`
  animation: ${load} 3s normal forwards;
  box-shadow: 0 10px 40px -10px #fff;
  border-radius: 100px;
  background: #fff;
  height: 23px;
  width: 0;
`;

const TopBarProgress = styled.div`
  background: rgba(255, 255, 255, 0.1);
  justify-content: flex-start;
  border-radius: 100px;
  align-items: center;
  position: relative;
  padding: 0 5px;
  display: flex;
  height: 23px;
  width: 400px;
`;

const TopBarStep = styled.div`
  padding-top: 5px;
`;
const TopBar = (props) => {
  return (
    <TopBarContainer>
      <TopBarTitle>
        <Title>Konfigurator</Title>
        <TopBarDesc>Wybierz idealnie dopasowaną karmę</TopBarDesc>
        <TopBarProcessContainer>
          <TopBarProgress>
            <TopBarProgressValue />
          </TopBarProgress>
        </TopBarProcessContainer>
        <TopBarStep>
          <p>Krok {props.step} z 6</p>
        </TopBarStep>
      </TopBarTitle>
    </TopBarContainer>
  );
};

export default TopBar;
