import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/nav/Navigation";
import { ArrowRight } from "react-bootstrap-icons";
import TopNav from "../../components/topNav/TopNav";
import { useState } from "react";
import "../stepOne/stepOne.css";

const BodyContainer = styled.div`
  width: 100%;
  height: calc(100vh - 150px);
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 800px;
  height: 630px;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  @media (max-width: 805px) {
    width: 600px;
  }
  @media (max-width: 610px) {
    width: 450px;
  }
  @media (max-width: 455px) {
    width: 350px;
  }
  @media (max-width: 355px) {
    width: 250px;
  }
`;

const FlexContaner = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  @media (max-width: 610px) {
    width: 400px;
  }
  @media (max-width: 455px) {
    width: 300px;
  }
  @media (max-width: 355px) {
    width: 220px;
  }
`;

const MainTitle = styled.h3`
  margin-top: 10px;
  font-weight: 700;
  font-size: 28px;
  @media (max-width: 455px) {
    font-size: 22px;
  }
  @media (max-width: 355px) {
    font-size: 20px;
  }
`;

const WhereButton = styled.button`
  margin-top: 20px;
  padding: 20px 40px;
  border: 1px solid #fff;
  background-color: #14b8a6;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-size: 16px;
  @media (max-width: 610px) {
    padding: 15px 20px;
  }
  @media (max-width: 355px) {
    padding: 10px 5px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 5px;
`;

const ButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 60px;
  width: 250px;
  border: none;
  background-color: #14b8a6;
  border-radius: 5px;
  font-size: 18px;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: #222;
    transition: 0.3s;
  }

  @media (max-width: 355px) {
    width: 200px;
  }
`;
const StepOne = () => {
  const [values, setValues] = useState({});
  const handleChangeButton = (e) =>
    setValues({
      where: e.target.value,
    });

  const whereHandler = (e) => {
    setValues({
      ...values,
      when: e.target.value,
    });
  };

  return (
    <div className="app">
      <Navigation />
      <BodyContainer>
        <TopNav />
        <MainContainer>
          <FlexContaner>
            <MainTitle>Gdzie będziesz uprawiał?</MainTitle>
            <ButtonContainer>
              <WhereButton
                className="button-focus"
                value="house"
                onClick={handleChangeButton}
              >
                Dom
              </WhereButton>
              <WhereButton
                className="button-focus"
                value="garden"
                onClick={handleChangeButton}
              >
                Ogród
              </WhereButton>
              <WhereButton
                className="button-focus"
                value="greenhouse"
                onClick={handleChangeButton}
              >
                Szklarnia
              </WhereButton>
            </ButtonContainer>
          </FlexContaner>
          <FlexContaner>
            <MainTitle>Kiedy oczekujesz efektu?</MainTitle>
            <GridContainer>
              <WhereButton
                className="button-focus"
                value="10"
                onClick={whereHandler}
              >
                10 dni
              </WhereButton>
              <WhereButton
                className="button-focus"
                value="30"
                onClick={whereHandler}
              >
                1 miesiąc
              </WhereButton>
              <WhereButton
                className="button-focus"
                value="180"
                onClick={whereHandler}
              >
                3-6 miesięcy
              </WhereButton>
              <WhereButton
                className="button-focus"
                value="540"
                onClick={whereHandler}
              >
                6-18 miesięcy
              </WhereButton>
              <WhereButton
                className="button-focus"
                value="541"
                onClick={whereHandler}
              >
                18 miesięcy +
              </WhereButton>
              <WhereButton
                className="button-focus"
                value=""
                onClick={whereHandler}
              >
                Bez znaczenia
              </WhereButton>
            </GridContainer>
          </FlexContaner>

          <FlexContaner>
            <Link to={"/krok-2"}>
              <ButtonNext>
                Następny krok
                <ArrowRight color="#fff" size={18} />
              </ButtonNext>
            </Link>
          </FlexContaner>
        </MainContainer>
      </BodyContainer>
    </div>
  );
};

export default StepOne;
