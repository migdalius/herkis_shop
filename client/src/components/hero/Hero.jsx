import { Link } from "react-router-dom";
import styled, { ThemeConsumer } from "styled-components";
import { useNavigate } from "react-router-dom";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const MainContainer = styled.div`
  width: 1920px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  @media (max-width: 1680px) {
    width: 1300px;
  }

  @media (max-width: 1310px) {
    width: 1100px;
  }

  @media (max-width: 1110px) {
    width: 900px;
  }

  @media (max-width: 905px) {
    width: 700px;
  }

  @media (max-width: 705px) {
    width: 500px;
  }
`;

const BackgroundImage = styled.div`
  width: 100%;
  margin-left: 20px;
  margin-right: 20px;
  height: 87vh;
  background-image: url("http://localhost:3000/img/bg-hero.png");
  border-radius: 0px 0px 20px 20px;
  position: relative;
  @media (max-width: 905px) {
    height: 1100px;
  }
  @media (max-width: 705px) {
    height: 720px;
  }
  @media (max-width: 505px) {
    height: 1300px;
  }
`;

const TitleContainer = styled.h1`
  color: #fff;
  font-size: 56px;
  margin: 40px;
  width: 600px;
  @media (max-width: 1680px) {
    font-size: 46px;
    margin: 20px;
  }

  @media (max-width: 1310px) {
    margin: 10px;
  }

  @media (max-width: 1110px) {
    width: 300px;
  }
  @media (max-width: 905px) {
    width: 200px;
    font-size: 30px;
  }
  @media (max-width: 705px) {
    width: 150px;
    font-size: 26px;
    margin: 0;
  }
`;

const DescriptionContainer = styled.p`
  width: 500px;
  font-size: 24px;
  margin: 40px;
  color: #fff;
  @media (max-width: 1680px) {
    width: 300px;
  }
  @media (max-width: 905px) {
    width: 200px;
    font-size: 22px;
    margin: 10px;
  }
  @media (max-width: 705px) {
    width: 150px;
    font-size: 20px;
    margin: 0;
    padding-top: 10px;
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 250px;
  width: 50%;
  height: 800px;
  margin: 30px;
  border-radius: 10px;
  margin-top: 120px;
  gap: 10px;
  @media (max-width: 1680px) {
    grid-template-rows: 200px;
    margin-top: 80px;
    width: 60%;
  }
  @media (max-width: 1310px) {
    width: 70%;
  }
  @media (max-width: 905px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    height: auto;
    gap: 10px;
  }
  @media (max-width: 705px) {
    height: 400px;
  }
  @media (max-width: 505px) {
    grid-template-columns: 1fr;
  }
`;

const DescContainer = styled.div`
  width: 50%;
  height: auto;
  margin: 50px;
  @media (max-width: 1680px) {
    width: 40%;
  }
  @media (max-width: 1310px) {
    width: 30%;
  }
  @media (max-width: 905px) {
    width: 20%;
  }
`;

const SingleCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  background-color: #fff;
  width: 200px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid #ddd;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    border: 7px solid #14b8a6;
  }

  @media (max-width: 1680px) {
    width: 150px;
    height: 150px;
  }
  @media (max-width: 1110px) {
    width: 110px;
    height: 110px;
  }
  @media (max-width: 905px) {
    width: 180px;
    height: 180px;
  }
  @media (max-width: 705px) {
    width: 125px;
    height: 125px;
  }
`;

const HeroBg = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const SingleCardTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  @media (max-width: 1110px) {
    font-size: 16px;
  }
  @media (max-width: 905px) {
    font-size: 18px;
  }
  @media (max-width: 705px) {
    font-size: 16px;
  }
`;

const SingleCardImage = styled.img`
  height: 130px;
  @media (max-width: 1680px) {
    height: 110px;
  }
  @media (max-width: 1110px) {
    height: 80px;
  }
  @media (max-width: 905px) {
    height: 130px;
  }
  @media (max-width: 705px) {
    height: 90px;
  }
`;

const ArrowImage = styled.img`
  height: 300px;
  position: absolute;
  left: 500px;
  top: 250px;
  @media (max-width: 1680px) {
    left: 300px;
    top: 190px;
  }
  @media (max-width: 1310px) {
    left: 100px;
    top: 190px;
    height: 250px;
  }
  @media (max-width: 1110px) {
    left: 100px;
    top: 250px;
    height: 200px;
  }
  @media (max-width: 905px) {
    left: 40px;
    top: 250px;
    height: 180px;
  }
  @media (max-width: 705px) {
    left: 50px;
    top: 190px;
    height: 150px;
  }
`;

const SecondBaner = styled.div`
  width: 1300px;
  height: 300px;
  background-color: #fff;
  border-radius: 10px;
  position: relative;
  bottom: 80px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ddd;
  display: flex;
  justify-content: center;
  @media (max-width: 1680px) {
    width: 1100px;
    height: 250px;
  }

  @media (max-width: 1310px) {
    width: 900px;
    height: 230px;
  }

  @media (max-width: 1110px) {
    width: 700px;
    height: 230px;
  }
  @media (max-width: 705px) {
    width: 500px;
    height: 250px;
  }

  @media (max-width: 505px) {
    display: grid;
    width: 350px;
    height: auto;
  }
`;

const SecondBanerItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ItemIcons = styled.img`
  width: 100px;
  height: 100px;
  margin-bottom: 10px;
  @media (max-width: 1680px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 1110px) {
    width: 60px;
    height: 60px;
  }
  @media (max-width: 705px) {
    width: 50px;
    height: 50px;
  }
`;
const ItemTitle = styled.h2`
  font-size: 28px;
  color: #222;
  @media (max-width: 1680px) {
    font-size: 24px;
  }
  @media (max-width: 1310px) {
    font-size: 20px;
  }
  @media (max-width: 1110px) {
    font-size: 18px;
  }
  @media (max-width: 705px) {
    font-size: 16px;
  }
`;
const ItemDesc = styled.p`
  margin: 15px;
  font-size: 16px;
  color: #222;
  @media (max-width: 1110px) {
    font-size: 14px;
  }
  @media (max-width: 705px) {
    font-size: 12px;
  }
`;
const Hero = () => {
  const navigate = useNavigate();
  const categoryHandler = (e) => {
    const clicked = e.target;

    const id = clicked.closest(".h").id;

    navigate("/produkty", { state: id });
  };
  return (
    <BodyContainer>
      <MainContainer>
        <ImageContainer>
          <BackgroundImage>
            <HeroBg>
              <DescContainer>
                <TitleContainer>Jakie nasiona cię interesują?</TitleContainer>
                <DescriptionContainer>
                  Wybierz rodzaj rośliny, która cię interesuje i skompletuj swój
                  własny zestaw lub kup gotowy zestaw do uprawy.
                </DescriptionContainer>

                <ArrowImage src="../img/right-arrow.png" />
              </DescContainer>
              <CardContainer>
                <SingleCard id="herbs" className="h" onClick={categoryHandler}>
                  <SingleCardImage src="../img/cat/ziola.png" />
                  <SingleCardTitle>Zioła</SingleCardTitle>
                </SingleCard>
                <SingleCard
                  id="flowers"
                  className="h"
                  onClick={categoryHandler}
                >
                  <SingleCardImage src="../img/cat/kwiaty.png" />
                  <SingleCardTitle>Kwiaty</SingleCardTitle>
                </SingleCard>
                <SingleCard
                  id="succulents"
                  className="h"
                  onClick={categoryHandler}
                >
                  <SingleCardImage src="../img/cat/sukulenty.png" />
                  <SingleCardTitle>Sukulenty</SingleCardTitle>
                </SingleCard>
                <SingleCard id="chilis" className="h" onClick={categoryHandler}>
                  <SingleCardImage src="../img/cat/chilis.png" />
                  <SingleCardTitle>Papryki chili</SingleCardTitle>
                </SingleCard>
                <SingleCard
                  id="vegetables"
                  className="h"
                  onClick={categoryHandler}
                >
                  <SingleCardImage src="../img/cat/pomidory.png" />
                  <SingleCardTitle>Warzywa</SingleCardTitle>
                </SingleCard>
                <SingleCard id="fruit" className="h" onClick={categoryHandler}>
                  <SingleCardImage src="../img/cat/owoce.png" />
                  <SingleCardTitle>Owoce</SingleCardTitle>
                </SingleCard>
                <SingleCard
                  id="sprouts"
                  className="h"
                  onClick={categoryHandler}
                >
                  <SingleCardImage src="../img/cat/kielki.png" />
                  <SingleCardTitle>Kiełki</SingleCardTitle>
                </SingleCard>
                <SingleCard id="bonsai" className="h" onClick={categoryHandler}>
                  <SingleCardImage src="../img/cat/bonsai.png" />
                  <SingleCardTitle>Bonsai</SingleCardTitle>
                </SingleCard>
              </CardContainer>
            </HeroBg>
          </BackgroundImage>
        </ImageContainer>
        <SecondBaner>
          <SecondBanerItem>
            <ItemIcons src="../img/cat/uprawa.png" />
            <ItemTitle>Uprawa Domowa</ItemTitle>
            <ItemDesc>
              Nie każdy rodzaj rośliny nadaje się do uprawy domowej, skorzystaj
              z generatora, żeby zaoszczędzić czas.
            </ItemDesc>
          </SecondBanerItem>
          <SecondBanerItem>
            <ItemIcons src="../img/cat/garden.png" />
            <ItemTitle>Uprawa w Ogrodzie</ItemTitle>
            <ItemDesc>
              Wybierz dogodny termin rozpoczęcia uprawy, dzięki generatorowi
              zaoszczędzisz czas na szukaniu produktów sezonowych.
            </ItemDesc>
          </SecondBanerItem>
          <SecondBanerItem>
            <ItemIcons src="../img/cat/instruction.png" />
            <ItemTitle>Instrukcje Uprawy</ItemTitle>
            <ItemDesc>
              Do każdego zamówienia otrzymujesz autorskie instrukcje opisujące
              sadzenie, przesadzanie i pielęgnacje wybranych roślin.
            </ItemDesc>
          </SecondBanerItem>
        </SecondBaner>
      </MainContainer>
    </BodyContainer>
  );
};

export default Hero;
