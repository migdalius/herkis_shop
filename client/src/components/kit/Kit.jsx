import styled, { keyframes } from "styled-components";

const Container = styled.div`
  height: 120px;
  width: 100vw;
  background-color: #fff;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  margin: 40px;
`;

const SubHeroContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const SubHeroIcons = styled.img`
  width: 80px;
  height: 80px;
`;
const SubHeroWrapper = styled.div``;
const SubHeroTitle = styled.h3`
  font-size: 28px;
`;
const SubHeroDesc = styled.p`
  font-size: 18px;
  color: #4c4c4c;
  width: 280px;
`;
const Kit = () => {
  return (
    <Container>
      <ContentContainer>
        <SubHeroContainer>
          <SubHeroIcons src="../img/dostawa.png" />
          <SubHeroWrapper>
            <SubHeroTitle>Darmowa Dostawa</SubHeroTitle>
            <SubHeroDesc>
              Wysyłamy produkty raz w tygodniu lub miesiącu
            </SubHeroDesc>
          </SubHeroWrapper>
        </SubHeroContainer>
        <SubHeroContainer>
          <SubHeroIcons src="../img/woda.png" />
          <SubHeroWrapper>
            <SubHeroTitle>Dodaj Tylko Wody</SubHeroTitle>
            <SubHeroDesc>Zestaw zawiera wszystko co potrzebne</SubHeroDesc>
          </SubHeroWrapper>
        </SubHeroContainer>
        <SubHeroContainer>
          <SubHeroIcons src="../img/uprawa.png" />
          <SubHeroWrapper>
            <SubHeroTitle>Uprawa domowa</SubHeroTitle>
            <SubHeroDesc>Każdy zestaw można uprawiać w domu</SubHeroDesc>
          </SubHeroWrapper>
        </SubHeroContainer>
        <SubHeroContainer>
          <SubHeroIcons src="../img/kids.png" />
          <SubHeroWrapper>
            <SubHeroTitle>Zestawy dla dzieci</SubHeroTitle>
            <SubHeroDesc>
              Zestawy są przystosowane dla dzieci od lat 7+
            </SubHeroDesc>
          </SubHeroWrapper>
        </SubHeroContainer>
      </ContentContainer>
    </Container>
  );
};

export default Kit;
