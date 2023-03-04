import styled, { keyframes } from "styled-components";
import Footer from "../../components/footer/Footer";

import TopNav from "../../components/topNav/TopNav";
import { Link } from "react-router-dom";

import { Basket, Clock } from "react-bootstrap-icons";

const MainContainer = styled.div`
  height: auto;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Container = styled.div`
  display: flex;
  width: 1200px;
  height: auto;
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

const PriceContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
`;
const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  flex: 1;
  border: 1px solid #ddd;
  height: 400px;
  border-radius: 5px;
`;

const PriceTitle = styled.p`
  margin: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #22c55e;
`;

const SubContainer = styled.div`
  display: flex;
  width: 240px;
  height: 75px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ddd;
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 50%;
  margin: 3px;
`;
const RightContainer = styled.div`
  width: 50%;
`;

const TitleContainer = styled.p``;
const TitleContainerPrice = styled.p`
  color: #222;
  font-size: 11px;
`;

const SubTitlePrice = styled.p`
  color: #6b7284;
  font-size: 12px;
`;

const Button = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
  &:hover {
    background-color: #fbbf24;
  }
`;

const Deliver = styled.h3`
  font-size: 24px;
  color: #22c55e;
  margin-top: 5px;
`;

const BigTitle = styled.h2`
  margin: 10px;
`;
const BigDesc = styled.p`
  margin: 10px;
`;

const List = styled.ul`
  margin: 20px;
`;
const ListItem = styled.li`
  margin-top: 10px;
`;

const BigDescTitle = styled.p`
  font-weight: 600;
  margin: 10px;
`;
const Sub = () => {
  return (
    <>
      <TopNav />
      <MainContainer>
        <Container>
          <Wrap>
            <Img src="../img/product.png" />
            <Desc>
              <BigTitle>Po co mi zestaw do uprawy?</BigTitle>
              <BigDesc>
                Prawdopodobnie, zawsze myślałeś/aś ,że fajnie byłoby mieć jakieś
                rośliny w domu. Natomiast kupienie sadzonki w markecie lub
                kwiatów w kwiaciarni to niestety nie to samo, co zasadzenie i
                dbanie o roślinę.
              </BigDesc>
              <BigDescTitle>
                Zestaw rozwiązuje dwa główne problemy:
              </BigDescTitle>
              <List>
                <ListItem>
                  Zawiera wszystkie elementy potrzebne do uprawy, wystarczy
                  dodać tylko wody.
                </ListItem>
                <ListItem>
                  Instrukcja krok po kroku jak należy uprawiać roślinę.
                </ListItem>
              </List>
              <BigDescTitle>
                I Najważniejszy element, dlaczego powinieneś kupić zestaw:
              </BigDescTitle>
              <BigDesc>
                Ponieważ, nie wiesz co będziesz uprawiać i to jest największa
                przyjemność, niepewność i ciekawość co z tego wyrośnie?
              </BigDesc>
            </Desc>
          </Wrap>
          <Wrap>
            <Title>Zestaw do uprawy Domowej</Title>
            <Time>Numer zestawu do uprawy: 01/2023</Time>
            <Deliver>Darmowa Dostawa - Kurierem</Deliver>
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
            <PriceContainer>
              <PriceWrap>
                <PriceTitle>Nowy zestaw co tydzień</PriceTitle>
                <SubContainer>
                  <LeftContainer>
                    <TitleContainer>Miesięczny</TitleContainer>
                    <TitleContainerPrice>
                      234,95 zł / miesięcznie
                    </TitleContainerPrice>
                    <SubTitlePrice>Oszczędzasz 15 zł</SubTitlePrice>
                  </LeftContainer>
                  <RightContainer>
                    <Button>Subskrybuj</Button>
                  </RightContainer>
                </SubContainer>
                <SubContainer>
                  <LeftContainer>
                    <TitleContainer>3 Miesiące</TitleContainer>
                    <TitleContainerPrice>
                      224,95 zł / miesięcznie
                    </TitleContainerPrice>
                    <SubTitlePrice>Oszczędzasz 75 zł</SubTitlePrice>
                  </LeftContainer>
                  <RightContainer>
                    <Button>Subskrybuj</Button>
                  </RightContainer>
                </SubContainer>
                <SubContainer>
                  <LeftContainer>
                    <TitleContainer>6 Miesięcy</TitleContainer>
                    <TitleContainerPrice>
                      214,85 zł / miesięcznie
                    </TitleContainerPrice>
                    <SubTitlePrice>Oszczędzasz 421,20 zł</SubTitlePrice>
                  </LeftContainer>
                  <RightContainer>
                    <Button>Subskrybuj</Button>
                  </RightContainer>
                </SubContainer>
                <SubContainer>
                  <LeftContainer>
                    <TitleContainer>12 Miesięcy</TitleContainer>
                    <TitleContainerPrice>
                      199,95 zł / miesięcznie
                    </TitleContainerPrice>
                    <SubTitlePrice>Oszczędzasz 606 zł</SubTitlePrice>
                  </LeftContainer>
                  <RightContainer>
                    <Button>Subskrybuj</Button>
                  </RightContainer>
                </SubContainer>
              </PriceWrap>
              <PriceWrap>
                <PriceTitle>Nowy zestaw co miesiąc</PriceTitle>
                <SubContainer>
                  <LeftContainer>
                    <TitleContainer>Miesięczny</TitleContainer>
                    <TitleContainerPrice>
                      49,99 zł / miesięcznie
                    </TitleContainerPrice>
                    <SubTitlePrice>Zestaw próbny</SubTitlePrice>
                  </LeftContainer>
                  <RightContainer>
                    <Button>Subskrybuj</Button>
                  </RightContainer>
                </SubContainer>
                <SubContainer>
                  <LeftContainer>
                    <TitleContainer>3 Miesiące</TitleContainer>
                    <TitleContainerPrice>
                      46,99 zł / miesięcznie
                    </TitleContainerPrice>
                    <SubTitlePrice>Oszczędzasz 9 zł</SubTitlePrice>
                  </LeftContainer>
                  <RightContainer>
                    <Button>Subskrybuj</Button>
                  </RightContainer>
                </SubContainer>
                <SubContainer>
                  <LeftContainer>
                    <TitleContainer>6 Miesięcy</TitleContainer>
                    <TitleContainerPrice>
                      45,99 zł / miesięcznie
                    </TitleContainerPrice>
                    <SubTitlePrice>Oszczędzasz 24 zł</SubTitlePrice>
                  </LeftContainer>
                  <RightContainer>
                    <Button>Subskrybuj</Button>
                  </RightContainer>
                </SubContainer>
                <SubContainer>
                  <LeftContainer>
                    <TitleContainer>12 Miesięcy</TitleContainer>
                    <TitleContainerPrice>
                      40,99 zł / miesięcznie
                    </TitleContainerPrice>
                    <SubTitlePrice>Oszczędzasz 108 zł</SubTitlePrice>
                  </LeftContainer>
                  <RightContainer>
                    <Button>Subskrybuj</Button>
                  </RightContainer>
                </SubContainer>
              </PriceWrap>
            </PriceContainer>
          </Wrap>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Sub;
