import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  height: calc(100vh - 80px);
  position: relative;
`;

const LeftHero = styled.div`
  width: 50%;
  background-color: #22c55e;
  height: calc(100vh - 80px);
`;
const RightHero = styled.div`
  width: 50%;
  background-color: #fff;
  height: calc(100vh - 80px);
`;

const TextContainer = styled.div`
  width: 600px;
  height: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px;
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
`;

const TextSubtitle = styled.p`
  padding-top: 30px;
  font-size: 20px;
  color: #f3f3f3;
  animation-name: ${textAnimate};
  animation-duration: 3s;
  animation-fill-mode: forwards;
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
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;
`;
const ButtonFirst = styled.button`
  padding: 20px 40px;
  border: none;
  color: #f3f3f3;
  background-color: #ef4444;
  cursor: pointer;
  font-size: 18px;
  border-radius: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  &:hover {
    background-color: #222;
    transition: 0.5s;
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
`;
const Price = styled.div`
  margin-left: 50px;
  font-size: 26px;
`;

const ContainerDetail = styled.div`
  padding-left: 450px;
  margin-top: 350px;
`;
const Title = styled.h2`
  font-size: 30px;
`;
const SubContaine = styled.div`
  width: 450px;
  display: flex;
  align-items: center;
  gap: 30px;
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
`;

const DescInfo = styled.p`
  font-size: 14px;
`;

const spanRed = styled.p`
  color: red;
`;

const StepWrapper = styled.div`
  width: 670px;
  display: flex;
  flex-direction: column;

  margin: 30px;
`;
const Step = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
const StepNumber = styled.h2`
  font-size: 35px;
  color: #14532d;
`;
const StepTitle = styled.p`
  font-size: 20px;
  color: #166534;
  font-weight: 600;
`;
const StepDesc = styled.p`
  font-size: 18px;
  color: #f3f3f3;
`;

const Arrow = styled.img`
  width: 90px;
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
`;

const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
const Delivery = styled.p``;

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
