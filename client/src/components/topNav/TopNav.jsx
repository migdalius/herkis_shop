import styled, { keyframes } from "styled-components";
import {
  ArrowRight,
  Basket3,
  BoxArrowInRight,
  PersonCircle,
  AspectRatio,
  ListNested,
} from "react-bootstrap-icons";
import img from "../../img/home/mask.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import LogoImg from "../../img/herkis_logo.png";
import { useState } from "react";
const Container = styled.div`
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftNav = styled.div`
  width: 50%;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RightNav = styled.div`
  width: 50%;
  background-color: #fff;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const MainNavContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const VerticalHr = styled.div`
  border-left: 1px solid #707070;
  width: 10px;
  height: 35px;

  @media (max-width: 768px) {
    display: none;
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

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin: 10px 0;
    gap: 15px;
    display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  }
`;

const Logo = styled.img`
  width: 140px;
  margin-right: 30px;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-fill-mode: forwards;

  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;

const ListItem = styled.li`
  color: #222;
  cursor: pointer;
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
  align-items: center;

  @media (max-width: 768px) {
    justify-content: space-between;
    width: 30%;
  }
`;

const NavText = styled.p`
  color: #222;
  display: block;

  @media (max-width: 768px) {
    display: none;
  }
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

const BurgerMenu = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
  }
`;

const TopNav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const handleToggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const quantity = useSelector((state) => state.cart.quantity);
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Container>
        <LeftNav>
          <MainNavContainer>
            <Link
              to={"/"}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                textDecoration: "none",
              }}
            >
              <Logo src={LogoImg} />
            </Link>
            <VerticalHr white />

            <List showMenu={showMenu}>
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
          </MainNavContainer>
        </LeftNav>
        <RightNav>
          <MainNavContainer>
            <NavContainer>
              <ContentWrapper>
                <ListNested
                  style={{ cursor: "pointer" }}
                  size={25}
                  onClick={handleToggleMenu}
                />
              </ContentWrapper>
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
                    <PersonCircle size={25} color={"#707070"} />
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
                    <BoxArrowInRight size={25} color={"#707070"} />
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
                  <Basket3 size={25} color={"#707070"} />
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

export default TopNav;
