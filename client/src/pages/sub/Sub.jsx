import styled, { keyframes } from "styled-components";
import Footer from "../../components/footer/Footer";

import TopNav from "../../components/topNav/TopNav";
import { Link } from "react-router-dom";

import { Basket, Clock } from "react-bootstrap-icons";

const MainContainer = styled.div`
  height: calc(100vh - 150px);
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  width: 1200px;
  height: 800px;
  background-color: #fff;
`;
const Wrap = styled.div`
  width: 50%;
  margin: 20px;
`;

const Img = styled.img`
  width: 600px;
  height: auto;
`;

const Desc = styled.p``;
const Title = styled.h3`
  font-size: 32px;
`;

const Time = styled.p`
  color: #6b7284;
  margin-top: 20px;
`;

const Line = styled.div`
  border-top: 1px solid #ddd;
  width: 50%;
  margin-top: 20px;
`;

const WrapContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Txt = styled.p`
  color: #6b7284;
`;

const ClockContainer = styled.div`
  display: flex;
  margin: 20px;
`;
const TimeWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100px;
`;
const Counter = styled.p`
  font-weight: 600;
  font-size: 28px;
`;
const Days = styled.p``;
const Sub = () => {
  return (
    <>
      <TopNav />
      <MainContainer>
        <Container>
          <Wrap>
            <Img src="../img/product.png" />
            <Desc>aaa</Desc>
          </Wrap>
          <Wrap>
            <Title>Zestaw do uprawy Domowej</Title>
            <Time>Numer zestawu do uprawy: 01/2023</Time>
            <Line />
            <WrapContainer>
              <Clock color="#22c55e" size={22} />
              <Txt>Następny zestaw pojawi się za:</Txt>
            </WrapContainer>
            <ClockContainer>
              <TimeWrap>
                <Counter>6</Counter>
                <Days>Dni</Days>
              </TimeWrap>
              <TimeWrap>
                <Counter>8</Counter>
                <Days>Godzin</Days>
              </TimeWrap>
              <TimeWrap>
                <Counter>7</Counter>
                <Days>Minut</Days>
              </TimeWrap>
              <TimeWrap>
                <Counter>36</Counter>
                <Days>Sekund</Days>
              </TimeWrap>
            </ClockContainer>
            <Line />
          </Wrap>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Sub;
