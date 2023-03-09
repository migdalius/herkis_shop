import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  width: 100vw;
  position: relative;
  @media (max-width: 940px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftHero = styled.div`
  width: 50%;
  background-color: #22c55e;
  height: calc(100vh - 80px);
  @media (max-width: 940px) {
    height: auto;
    width: 100%;
  }
`;
const RightHero = styled.div`
  width: 50%;
  background-color: #fff;
  height: calc(100vh - 80px);
  @media (max-width: 940px) {
    height: auto;
    width: 100%;
  }
`;

const TextContainer = styled.div`
  width: 600px;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px;
  @media (max-width: 1770px) {
    width: 550px;
  }
  @media (max-width: 1595px) {
    width: 450px;
  }

  @media (max-width: 1380px) {
    width: 380px;
  }
  @media (max-width: 1305px) {
    width: 300px;
  }
  @media (max-width: 1190px) {
    width: 100px;
  }
  @media (max-width: 940px) {
    width: 100%;
    padding-top: 30px;
  }
`;

const textAnimate = keyframes`
0% {
    opacity: 0;
    transform: translateY(80%);
  }
  20% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: translateY(0%);
  }
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const TextTitle = styled.h1`
  font-size: 60px;
  color: #f3f3f3;
  animation-name: ${textAnimate};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  @media (max-width: 1595px) {
    font-size: 46px;
  }
  @media (max-width: 1380px) {
    font-size: 36px;
  }
  @media (max-width: 1305px) {
    font-size: 30px;
  }
  @media (max-width: 1190px) {
    display: none;
  }
  @media (max-width: 940px) {
    display: block;
    font-size: 46px;
  }
  @media (max-width: 825px) {
    display: block;
    font-size: 36px;
  }
  @media (max-width: 665px) {
    font-size: 30px;
  }
  @media (max-width: 555px) {
    font-size: 30px;
    width: 400px;
  }
`;

const TextSubtitle = styled.p`
  padding-top: 30px;
  font-size: 20px;
  color: #f3f3f3;
  animation-name: ${textAnimate};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  @media (max-width: 1770px) {
    width: 550px;
  }
  @media (max-width: 1595px) {
    font-size: 18px;
    width: 450px;
  }
  @media (max-width: 1380px) {
    width: 380px;
  }
  @media (max-width: 1305px) {
    width: 300px;
  }
  @media (max-width: 1190px) {
    display: none;
  }
  @media (max-width: 940px) {
    display: inline;
    width: 80%;
    font-size: 20px;
  }
`;
const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 730px;
  height: 730px;
  border-radius: 10px;
  position: absolute;
  left: 600px;
  @media (max-width: 1770px) {
    left: 500px;
  }
  @media (max-width: 1595px) {
    width: 650px;
    height: 650px;
  }
  @media (max-width: 1475px) {
    left: 450px;
  }
  @media (max-width: 1380px) {
    left: 350px;
  }
  @media (max-width: 1305px) {
    left: 335px;
    width: 500px;
  }
  @media (max-width: 1190px) {
    width: 400px;
    height: 350px;
    left: 10px;
    top: 15px;
  }
  @media (max-width: 940px) {
    width: 400px;
    height: 350px;
    left: 400px;
    top: 250px;
  }
  @media (max-width: 780px) {
    display: none;
  }
`;

const breatheAnimation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const Img = styled.img`
  width: 600px;
  height: auto;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  @media (max-width: 1610px) {
    width: 550px;
  }
  @media (max-width: 1610px) {
    width: 500px;
  }
  @media (max-width: 1240px) {
    width: 450px;
  }
  @media (max-width: 1190px) {
    width: 400px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;

  left: 720px;
  top: 660px;
  width: 500px;
  height: 90px;
  background-color: #f3f3f3;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

  @media (max-width: 1770px) {
    left: 620px;
  }

  @media (max-width: 1610px) {
    width: 460px;
    left: 640px;
    top: 630px;
  }

  @media (max-width: 1595px) {
    width: 460px;
    left: 610px;
    top: 600px;
  }
  @media (max-width: 1475px) {
    left: 550px;
  }
  @media (max-width: 1380px) {
    left: 450px;
  }
  @media (max-width: 1305px) {
    left: 430px;
  }
  @media (max-width: 1305px) {
    width: 420px;
    left: 380px;
    top: 570px;
  }
  @media (max-width: 1240px) {
    left: 395px;
    width: 375px;
    top: 550px;
  }
  @media (max-width: 1190px) {
    display: none;
  }
`;
const Price = styled.div`
  margin-left: 50px;
  font-size: 26px;
  @media (max-width: 1610px) {
    margin-left: 10px;
  }
  @media (max-width: 1305px) {
    font-size: 20px;
  }
  @media (max-width: 1240px) {
    font-size: 18px;
  }
`;

const ContainerDetail = styled.div`
  padding-left: 450px;
  margin-top: 350px;
  @media (max-width: 1595px) {
    padding-left: 450px;
  }
  @media (max-width: 1518px) {
    padding-left: 500px;
  }
  @media (max-width: 1465px) {
    padding-right: 30px;
  }
  @media (max-width: 1305px) {
    padding-left: 450px;
  }
  @media (max-width: 940px) {
    padding-left: 0px;
    margin-top: 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
const Title = styled.h2`
  font-size: 30px;
`;
const SubContaine = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  gap: 30px;
  @media (max-width: 1560px) {
    width: 400px;
  }
`;
const Count = styled.p`
  font-size: 18px;
`;
const Icons = styled.img`
  width: 35px;
  height: 35px;
`;
const Desc = styled.p`
  font-size: 18px;
`;

const ContainerWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 1369px) {
    margin-right: 20px;
  }
  @media (max-width: 1345px) {
    margin-right: 50px;
  }
  @media (max-width: 940px) {
    margin: 50px;
  }
`;

const DescInfo = styled.p`
  font-size: 14px;
`;

const StepWrapper = styled.div`
  width: 670px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1475px) {
    width: 500px;
  }

  margin: 30px;
  @media (max-width: 1505px) {
    width: 300px;
  }
  @media (max-width: 1305px) {
    margin: 55px;
  }
  @media (max-width: 1190px) {
    margin-left: 55px;
    margin-top: 150px;
  }
  @media (max-width: 780px) {
    width: 100%;
  }
`;
const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  @media (max-width: 1770px) {
    width: 600px;
  }
  @media (max-width: 1475px) {
    width: 500px;
  }
  @media (max-width: 1380px) {
    width: 400px;
  }
  @media (max-width: 1305px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media (max-width: 780px) {
    flex-direction: row;
    width: 70%;
  }
`;
const StepNumber = styled.h2`
  font-size: 35px;
  color: #14532d;
  @media (max-width: 1305px) {
    display: none;
  }
  @media (max-width: 780px) {
    display: block;
  }
`;
const StepTitle = styled.p`
  font-size: 20px;
  color: #166534;
  font-weight: 600;
  width: 150px;
  @media (max-width: 1190px) {
    width: 400px;
  }
`;
const StepDesc = styled.p`
  font-size: 18px;
  color: #f3f3f3;
  @media (max-width: 1305px) {
    font-size: 16px;
  }
  @media (max-width: 780px) {
    font-size: 18px;
  }
`;

const Arrow = styled.img`
  width: 90px;
  @media (max-width: 1305px) {
    width: 60px;
  }
`;

const PriceButton = styled.button`
  border: none;
  height: 90px;
  border-radius: 10px 0px 0px 10px;
  width: 100%;
  background-color: #ef4444;
  color: #fff;
  font-size: 17px;
  padding: 10px;

  cursor: pointer;
  &:hover {
    background-color: #222;
  }
  @media (max-width: 1240px) {
    font-size: 16px;
  }
  @media (max-width: 1190px) {
    height: 70px;
    border-radius: 10px;
  }
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media (max-width: 1240px) {
    width: 70%;
  }
`;
const Delivery = styled.p`
  @media (max-width: 1240px) {
    font-size: 14px;
  }
`;
const ImgLowContainer = styled.div`
  visibility: hidden;
  @media (max-width: 780px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 600px;
    height: auto;
  }
`;
const ImgLow = styled.img`
  visibility: hidden;
  @media (max-width: 780px) {
    visibility: visible;
    width: 100%;
    height: auto;
  }
`;
const Tech = styled.div`
  display: none;
  @media (max-width: 780px) {
    display: block;
    display: flex;
    justify-content: center;
  }
`;
const SadButton = styled.button`
  visibility: hidden;

  @media (max-width: 1190px) {
    visibility: visible;
    border: none;
    height: 90px;
    border-radius: 10px;
    width: 100%;
    background-color: #ef4444;
    color: #fff;
    font-size: 17px;
    padding: 10px;

    cursor: pointer;
    &:hover {
      background-color: #222;
    }
  }
`;
const Hero = () => {
  return (
    <Container>
      <LeftHero>
        <TextContainer>
          <TextTitle>Zestaw do uprawy Niespodzianka</TextTitle>
          <TextSubtitle>
            Nigdy nie wiesz co będziesz uprawiał, co tydzień nowy zestaw do
            uprawy wysyłany bezpośrednio do twojego domu lub paczkomatu.
          </TextSubtitle>
        </TextContainer>
        <Tech>
          <ImgLowContainer>
            <ImgLow src="../img/product.png" />
          </ImgLowContainer>
        </Tech>
        <StepWrapper>
          <Step>
            <StepNumber>1</StepNumber>
            <StepTitle>Wybierz plan subskrypcji</StepTitle>
            <StepDesc>Co tydzień/miesiąc otrzymuj nowy zestaw</StepDesc>
          </Step>
          <Step>
            <Arrow src="../img/arrow.png" />
          </Step>

          <Step>
            <StepNumber>2</StepNumber>
            <StepTitle>Dostawa do domu</StepTitle>
            <StepDesc>Wybierz rodzaj dostawy Kurier/Paczkomat</StepDesc>
          </Step>
          <Step>
            <Arrow src="../img/arrow1.png" />
          </Step>
          <Step>
            <StepNumber>3</StepNumber>
            <StepTitle>Uprawa domowa</StepTitle>
            <StepDesc>Potrzebujesz tylko wody, reszta w zestawie</StepDesc>
          </Step>
        </StepWrapper>
      </LeftHero>
      <RightHero>
        <TextContainer>
          <ContainerDetail>
            <Title>Co dostaniesz w zestawie?</Title>
            <ContainerWrapper>
              <SubContaine>
                <Count>1 szt</Count>
                <Icons src="../img/pot.png" />
                <Desc>Doniczka do uprawy 13 cm</Desc>
              </SubContaine>
              <SubContaine>
                <Count>1L</Count>
                <Icons src="../img/soil.png" />
                <Desc>Podłoże organiczne z nawozem</Desc>
              </SubContaine>
              <SubContaine>
                <Count>1op.</Count>
                <Icons src="../img/seeds.png" />
                <Desc>Nasiona do uprawy (na dwa wysiewy)</Desc>
              </SubContaine>
              <SubContaine>
                <Count>1op.</Count>
                <Icons src="../img/nawoz.png" />
                <Desc>Pałeczki nawozowe do uprawy</Desc>
              </SubContaine>
              <SubContaine>
                <Count>1op.</Count>
                <Icons src="../img/keramzyt.png" />
                <Desc>Kreramzyt - drenaż na spód doniczki</Desc>
              </SubContaine>
              <SubContaine>
                <Count>1op.</Count>
                <Icons src="../img/hydro.png" />
                <Desc>Hydrożel - przechowuje nadmiar wody w doniczce</Desc>
              </SubContaine>
              <SubContaine>
                <Count>1 szt</Count>
                <Icons src="../img/inst.png" />
                <Desc>Papierowa instrukcja uprawy</Desc>
              </SubContaine>
              <DescInfo>
                *Niektóre rośliny wymagają, dodatkowego drenażu jak np: piasek
                lub dodatkowego nawozu, w takich przypadkach dokładny skład
                zestawu znajduje się w instrukcji.
              </DescInfo>
              <Link to={"/subskrypcja"}>
                <SadButton>Kup Subskrypcje</SadButton>
              </Link>
            </ContainerWrapper>
          </ContainerDetail>
        </TextContainer>
      </RightHero>
      <ImgContainer>
        <Img src="../img/product.png" />
      </ImgContainer>
      <PriceContainer>
        <Link to={"/subskrypcja"}>
          <PriceButton>Kup Subskrypcje</PriceButton>
        </Link>
        <PriceWrapper>
          <Price>od 39,99 zł</Price>
          <Delivery>(Darmowa Dostawa)</Delivery>
        </PriceWrapper>
      </PriceContainer>
    </Container>
  );
};

export default Hero;
