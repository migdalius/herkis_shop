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
  width: 670px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const PriceContainer = styled.div`
  width: 370px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
`;
const Wrapper = styled.div``;
const Title = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
`;

const formContainer = styled.form`
  display: flex;
  gap: 35px;
  margin: 20px;
  padding-top: 20px;
`;
const ProductImg = styled.img`
  width: 90px;
  height: 120px;
  object-fit: scale-down;
`;
const ProductBody = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
const ProductTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
`;
const ProductDesc = styled.p`
  color: #949494e5;
  font-size: 12px;
`;
const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: #f3f3f3;
  width: 80px;
  height: 35px;
  border-radius: 5px;
`;
const Button = styled.button`
  width: 25px;
  height: 25px;
  border: none;
  background-color: #f3f3f3;
  cursor: pointer;
`;
const CounterProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f3f3f3;
  width: 25px;
  height: 25px;
`;

const PriceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15px;
  gap: 50px;
`;

const Price = styled.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 15px;
`;
const ProductFooter = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px;
  background-color: #f3f3f3;
  height: 60px;
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
const Span = styled.p`
  font-size: 12px;
`;

const DeliveryOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 20px;
`;

const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 30px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  gap: 10px;
`;
const Delivery = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <MainContainer>
      <Container>
        <Logo src="../img/products/logo.jpg" />
        <NavigationContainer>
          <NavItem>
            <Basket color="#222" size={30} />
            <CategoryTitle>Koszyk</CategoryTitle>
          </NavItem>
          <Line />
          <NavItem>
            <Truck color="#0d9488" size={30} />
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
            <Title>Adres dostawy</Title>
            <CartContainer>
              <formContainer>a</formContainer>
            </CartContainer>
          </Wrapper>
          <Wrapper>
            <Title>Podsumowanie</Title>
            <PriceContainer>
              <PriceWrap>
                <ProductTitle>Wartość produktów</ProductTitle>
                <Price>{cart.total} zł</Price>
              </PriceWrap>
              <Line />

              <DeliveryOptions>
                <Wrapper>
                  <ShieldCheck
                    color="#0d9488"
                    size={20}
                    style={{ cursor: "pointer" }}
                  />
                  <Span>Bezpieczne Zakupy</Span>
                </Wrapper>
                <Wrapper>
                  <BoxSeam
                    color="#0d9488"
                    size={20}
                    style={{ cursor: "pointer" }}
                  />
                  <Span>Dostawa następnego dnia</Span>
                </Wrapper>
                <Wrapper>
                  <Cash
                    color="#0d9488"
                    size={20}
                    style={{ cursor: "pointer" }}
                  />
                  <Span>Szybkie płatności</Span>
                </Wrapper>
              </DeliveryOptions>
              <ButtonWrapper>
                <NextButton>Przejdz do płatności</NextButton>
                <NextButton>Wróć</NextButton>
              </ButtonWrapper>
            </PriceContainer>
          </Wrapper>
        </BodyContainer>
      </Container>
    </MainContainer>
  );
};

export default Delivery;
