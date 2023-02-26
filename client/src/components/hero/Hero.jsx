import styled, { keyframes } from "styled-components";
import { ArrowRight, Basket3, BoxArrowInRight } from "react-bootstrap-icons";
import img from "../../img/home/hero.jpg";
const Container = styled.div`
  display: flex;
  height: 100vh;
  position: relative;
`;

const LeftHero = styled.div`
  width: 50%;
  background-color: #22c55e;
  height: 100vh;
`;
const RightHero = styled.div`
  width: 50%;
  background-color: #fff;
  height: 100vh;
`;

const TextContainer = styled.div`
  width: 600px;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px;
`;

const TextTitle = styled.h1`
  font-size: 60px;
  color: #f3f3f3;
`;
const TextSubtitle = styled.p`
  padding-top: 30px;
  font-size: 20px;
  color: #f3f3f3;
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

const Img = styled.img`
  width: 600px;
  height: auto;
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
const ButtonSecond = styled.button`
  padding: 20px 40px;
  border-radius: 5px;
  border: none;
  color: #f3f3f3;
  background-color: #15803d;
  cursor: pointer;
  font-size: 16px;
  &:hover {
    background-color: #222;
    transition: 0.5s;
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
          <ButtonContainer>
            <ButtonFirst>Jak to działa?</ButtonFirst>
            <ButtonSecond>Co zawiera zestaw?</ButtonSecond>
          </ButtonContainer>
        </TextContainer>
      </LeftHero>
      <RightHero>aa</RightHero>
      <ImgContainer>
        <Img src="../img/product.png" />
      </ImgContainer>
    </Container>
  );
};

export default Hero;
