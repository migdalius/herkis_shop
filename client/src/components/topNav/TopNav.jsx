import React from "react";
import styled, { keyframes } from "styled-components";

const TopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 120px;
  background-color: #fff;
  border-radius: 10px;
  /* border: 1px solid #ddd; */

  @media (max-width: 805px) {
    width: 600px;
  }

  @media (max-width: 610px) {
    width: 450px;
  }

  @media (max-width: 455px) {
    width: 300px;
    gap: 10px;
  }

  @media (max-width: 355px) {
    width: 250px;
  }
`;
const CategoryContainer = styled.div`
  width: 100px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`;

const TopImage = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: 610px) {
    width: 35px;
    height: 35px;
  }
  @media (max-width: 455px) {
    width: 30px;
    height: 30px;
  }
  @media (max-width: 355px) {
    width: 25px;
    height: 25px;
  }
`;

const Dots = styled.img`
  width: 30px;
  @media (max-width: 610px) {
    width: 15px;
  }
  @media (max-width: 455px) {
    display: none;
  }
`;

const TopTitle = styled.p`
  @media (max-width: 455px) {
    font-size: 12px;
  }
  @media (max-width: 355px) {
    font-size: 10px;
  }
`;
const TopNav = () => {
  return (
    <TopContainer>
      <CategoryContainer>
        <TopImage src="../img/step/start.png" />
        <TopTitle>Start</TopTitle>
      </CategoryContainer>
      <Dots src="../img/step/dots.png" />
      <CategoryContainer>
        <TopImage src="../img/step/nasiona.png" />
        <TopTitle>Nasiona</TopTitle>
      </CategoryContainer>
      <Dots src="../img/step/dots.png" />
      <CategoryContainer>
        <TopImage src="../img/step/doniczka.png" />
        <TopTitle>Doniczki/Osłonki</TopTitle>
      </CategoryContainer>
      <Dots src="../img/step/dots.png" />
      <CategoryContainer>
        <TopImage src="../img/step/podloze.png" />
        <TopTitle>Podłoże</TopTitle>
      </CategoryContainer>

      <Dots src="../img/step/dots.png" />
      <CategoryContainer>
        <TopImage src="../img/step/drenaz.png" />
        <TopTitle>Drenaż</TopTitle>
      </CategoryContainer>
      <Dots src="../img/step/dots.png" />
      <CategoryContainer>
        <TopImage src="../img/step/nawoz.png" />
        <TopTitle>Nawóz</TopTitle>
      </CategoryContainer>
    </TopContainer>
  );
};

export default TopNav;
