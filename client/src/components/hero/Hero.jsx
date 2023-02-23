import styled, { keyframes } from "styled-components";
import { ArrowRight, Basket3, BoxArrowInRight } from "react-bootstrap-icons";
import img from "../../img/home/hero.jpg";
const Container = styled.div`
  display: flex;
`;

const LeftHero = styled.div`
  width: 65%;
`;
const RightHero = styled.div`
  width: 35%;
`;

const animation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }

`;

const HeroBg = styled.div`
  background-image: url(${img});
  min-width: 65vw;
  height: calc(100vh - 80px);
  animation-name: ${animation};
  position: relative;
  animation-duration: 3s;
  animation-timing-function: linear;
`;

const Hero = () => {
  return (
    <Container>
      <LeftHero></LeftHero>
      <RightHero>b</RightHero>
    </Container>
  );
};

export default Hero;
