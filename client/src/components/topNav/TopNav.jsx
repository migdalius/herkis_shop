import styled, { keyframes } from "styled-components";
import {
  ArrowRight,
  Basket3,
  BoxArrowInRight,
  PersonCircle,
} from "react-bootstrap-icons";
import img from "../../img/home/mask.jpg";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

const Container = styled.div`
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const LeftNav = styled.div`
  width: 50%;
  background-color: #fff;
`;
const RightNav = styled.div`
  width: 50%;
  background-color: #fff;
`;

const MainNavContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const VerticalHr = styled.div`
  border-left: 1px solid #707070;
  width: 10px;
  height: 35px;
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
`;

const Logo = styled.img`
  width: 140px;

  margin-right: 30px;
  animation-name: ${breatheAnimation};
  animation-duration: 3s;
  animation-fill-mode: forwards;
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
`;

const NavText = styled.p`
  color: #222;
  @media (max-width: 905px) {
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

const TopNav = () => {
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
              <Logo src="../img/herkis_logo.png" />
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
          </MainNavContainer>
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
