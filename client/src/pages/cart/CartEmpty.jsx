import styled, { keyframes } from "styled-components";
import {
  Basket,
  BoxSeam,
  Cash,
  CreditCard2Back,
  ShieldCheck,
  TrashFill,
  Truck,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const MainContainer = styled.div`
  background-color: #f4f6f9;
  width: 100vw;
  height: 100vh;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const Logo = styled.img`
  width: 120px;
`;
const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  width: 600px;
`;

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  width: 100px;
  height: auto;
`;

const CategoryTitle = styled.p`
  font-size: 16px;
  color: #222;
  font-weight: 700;
`;

const Line = styled.hr`
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #ccc, #ccc);
`;

const BodyContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 40px;
`;
const CartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  background-color: #f4f6f9;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const Wrapper = styled.div``;
const Title = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
`;

const ProductTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
  height: 100px;
`;

const NextButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  background-color: #0d9488;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
`;

const CartEmpty = () => {
  return (
    <MainContainer>
      <Container>
        <Logo src="../img/products/logo.jpg" />
        <NavigationContainer>
          <NavItem>
            <Basket color="#0d9488" size={30} />
            <CategoryTitle>Koszyk</CategoryTitle>
          </NavItem>
          <Line />
          <NavItem>
            <Truck color="#222" size={30} />
            <CategoryTitle>Dostawa</CategoryTitle>
          </NavItem>
          <Line />
          <NavItem>
            <CreditCard2Back color="#222" size={30} />
            <CategoryTitle>Płatności</CategoryTitle>
          </NavItem>
        </NavigationContainer>
        <BodyContainer>
          <Wrapper>
            <CartContainer>
              <ProductTitle>Twój koszyk jest pusty!</ProductTitle>
              <NextButton>Wróć do sklepu</NextButton>
            </CartContainer>
          </Wrapper>
        </BodyContainer>
      </Container>
    </MainContainer>
  );
};

export default CartEmpty;
