import styled, { keyframes } from "styled-components";
import {
  ArrowRight,
  Basket3,
  BoxArrowInRight,
  ListCheck,
  PersonCircle,
} from "react-bootstrap-icons";
import img from "../../img/home/mask.jpg";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
const Container = styled.div`
  display: flex;
`;

const LeftNav = styled.div`
  width: 50%;
  background-color: #22c55e;
`;
const RightNav = styled.div`
  width: 50%;
  background-color: #fff;
  @media (max-width: 940px) {
    background-color: #22c55e;
  }
`;

const MainNavContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
  @media (max-width: 1105px) {
    margin: 20px;
    margin-bottom: 40px;
  }
`;

const VerticalHr = styled.div`
  border-left: ${(props) =>
    props.white ? "1px solid #fff" : "1px solid #222"};
  width: 10px;
  height: 35px;
  @media (max-width: 940px) {
    border-left: 1px solid #fff;
  }
`;

const breatheAnimation = keyframes`
  0%   { opacity: 0; }
  100% { opacity: 1; }
`;

const List = styled.ul`
  margin-left: 30px;
  display: flex;
  gap: 30px;
  align-items: center;
  list-style-type: none;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  @media (max-width: 1105px) {
    margin-left: 15px;
    gap: 15px;
  }
`;

const Logo = styled.img`
  width: 140px;
  margin-right: 30px;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-fill-mode: forwards;
  @media (max-width: 960px) {
    width: 110px;
    margin-right: 15px;
  }
`;
const ListItem = styled.li`
  color: #fff;
  cursor: pointer;
  @media (max-width: 1115px) {
    font-size: 16px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
`;
const NavContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const NavText = styled.p`
  color: #222;

  @media (max-width: 940px) {
    color: #fff;
  }
`;

const HeroContainer = styled.div``;

const Nav = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: #facc15;
  border-radius: 50%;
  position: absolute;
  bottom: -9px;
  left: 14px;
`;
const CircleNumber = styled.p``;

const Navigation = () => {
  const user = useSelector((state) => state.user.currentUser);
  const quantity = useSelector((state) => state.cart.quantity);

  return (
    <>
      <Container>
        <LeftNav>
          <Nav>
            <Link
              to={"/"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
              }}
            >
              <Logo src="../img/herkis.png" />
            </Link>
            <VerticalHr white />
            <List>
              <Link
                to={"/jak-dziala-zestaw-do-uprawy"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  textDecoration: "none",
                }}
              >
                <ListItem>Jak to działa?</ListItem>
              </Link>

              <Link
                to={"/subskrypcja"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  textDecoration: "none",
                }}
              >
                <ListItem>Subskrypcja</ListItem>
              </Link>
              <Link
                to={"/kontakt"}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                  textDecoration: "none",
                }}
              >
                <ListItem>Kontakt</ListItem>
              </Link>
            </List>
          </Nav>
        </LeftNav>
        <RightNav>
          <MainNavContainer>
            <NavContainer>
              {user ? (
                <ContentWrapper>
                  <Link
                    to={"/moje-konto"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      textDecoration: "none",
                    }}
                  >
                    <PersonCircle size={25} color={"#064e3b"} />
                    <NavText>Moje Konto</NavText>
                  </Link>
                </ContentWrapper>
              ) : (
                <ContentWrapper>
                  <Link
                    to={"/logowanie"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      textDecoration: "none",
                    }}
                  >
                    <BoxArrowInRight size={25} color={"#064e3b"} />
                    <NavText>Logowanie</NavText>
                  </Link>
                </ContentWrapper>
              )}
              <VerticalHr />

              <ContentWrapper>
                <Link
                  to={"/koszyk"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    textDecoration: "none",
                  }}
                >
                  <Basket3 size={25} color={"#064e3b"} />
                  <NavText>Koszyk</NavText>
                  <Circle>
                    <CircleNumber>{quantity}</CircleNumber>
                  </Circle>
                </Link>
              </ContentWrapper>
            </NavContainer>
          </MainNavContainer>
        </RightNav>
      </Container>
    </>
  );
};

export default Navigation;
