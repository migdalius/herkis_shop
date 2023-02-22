import styled, { keyframes } from "styled-components";
import { ArrowRight, Basket3, BoxArrowInRight } from "react-bootstrap-icons";
import img from "../../img/home/mask.jpg";
const Container = styled.div`
  display: flex;
  border-bottom: 1px solid #ddd;
`;

const LeftNav = styled.div`
  width: 65%;
`;
const RightNav = styled.div`
  width: 35%;
`;

const MainNavContainer = styled.div`
  margin: 20px;
  display: flex;
  justify-content: center;
`;

const VerticalHr = styled.div`
  border-left: ${(props) =>
    props.white ? "1px solid #fff" : "1px solid #222"};
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
  width: 130px;
  height: 40px;
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
`;
const NavContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const NavText = styled.p`
  @media (max-width: 905px) {
    display: none;
  }
`;

const HeroContainer = styled.div``;

const Navigation = () => {
  return (
    <>
      <Container>
        <LeftNav>
          <MainNavContainer>
            <Logo src="https://www.szybkauprawa.pl/img/logo.png" />
            <VerticalHr white />
            <List>
              <ListItem>Jak to działa?</ListItem>
              <ListItem>Nasze zestawy</ListItem>
              <ListItem>Cennik</ListItem>
              <ListItem>Kontakt</ListItem>
            </List>
          </MainNavContainer>
        </LeftNav>
        <RightNav>
          <MainNavContainer>
            <NavContainer>
              <ContentWrapper>
                <BoxArrowInRight size={25} color={"#3a9842"} />
                <NavText>Logowanie</NavText>
              </ContentWrapper>
              <VerticalHr />
              <ContentWrapper>
                <Basket3 size={25} color={"#3a9842"} />
                <NavText>Koszyk</NavText>
              </ContentWrapper>
            </NavContainer>
          </MainNavContainer>
        </RightNav>
      </Container>
    </>
  );
};

export default Navigation;
