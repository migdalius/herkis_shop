import styled, { keyframes } from "styled-components";
import {
  Basket,
  BoxArrowRight,
  BoxSeam,
  Cash,
  CreditCard2Back,
  ShieldCheck,
  TrashFill,
  Truck,
  XLg,
} from "react-bootstrap-icons";
import { useSelector, useDispatch } from "react-redux";
import { removeProduct } from "../../redux/cartRedux";
import { Link } from "react-router-dom";

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
  width: 160px;
`;
const NavigationContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  width: 600px;
  @media (max-width: 625px) {
    width: 500px;
  }
  @media (max-width: 525px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 300px;
  }
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
  @media (max-width: 880px) {
    flex-direction: column;
  }
  @media (max-width: 525px) {
    justify-content: center;
    align-items: center;
  }
`;
const CartContainer = styled.div`
  width: 670px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 1090px) {
    width: 570px;
  }
  @media (max-width: 625px) {
    width: 500px;
  }
  @media (max-width: 525px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 300px;
  }
`;
const PriceContainer = styled.div`
  width: 370px;
  height: auto;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  padding: 20px;
  @media (max-width: 1000px) {
    width: 250px;
  }
  @media (max-width: 880px) {
    width: 400px;
  }
  @media (max-width: 425px) {
    width: 300px;
  }
`;
const Wrapper = styled.div``;
const Title = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    font-size: 24px;
  }
`;

const Product = styled.div`
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
  background-color: #22c55e;
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

const EmptyCart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 290px;
  font-size: 28px;
`;
const Cart = () => {
  const cart = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  console.log(cart.quantity);
  return (
    <MainContainer>
      <Container>
        <Logo src="../img/herkis_logo.png" />
        <NavigationContainer>
          <NavItem>
            <Basket color="#22c55e" size={30} />
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
            <Title>Wszystkie Subskrypcje</Title>
            <CartContainer>
              {cart.quantity > 0 ? (
                cart.products.map((product) => (
                  <Product>
                    <ProductImg src={product.img} />
                    <ProductBody>
                      <ProductTitle>{product.title}</ProductTitle>

                      <ProductDesc>Waga: 550g</ProductDesc>
                      <CounterWrapper>
                        <Button>+</Button>
                        <CounterProduct>{product.quantity}</CounterProduct>
                        <Button>-</Button>
                      </CounterWrapper>
                    </ProductBody>
                    <PriceWrapper>
                      <TrashFill
                        color="#222"
                        size={20}
                        style={{ cursor: "pointer" }}
                        onClick={() => dispatch(removeProduct(product))}
                      />
                      <Price>{product.price} zł</Price>
                    </PriceWrapper>
                  </Product>
                ))
              ) : (
                <EmptyCart>Twój koszyk jest pusty, niestety...</EmptyCart>
              )}

              <ProductFooter>
                <ProductTitle>Dostawa Darmowa</ProductTitle>
                <ProductDesc>Bez względu na ilość subskrypcji</ProductDesc>
              </ProductFooter>
            </CartContainer>
          </Wrapper>
          <Wrapper>
            <Title>Podsumowanie</Title>
            <PriceContainer>
              <PriceWrap>
                <ProductTitle>Koszt Subskrypcji</ProductTitle>
                <Price>
                  {(Math.round(cart.total * 100) / 100).toFixed(2)} zł
                </Price>
              </PriceWrap>
              <Line />

              <DeliveryOptions>
                <Wrapper>
                  <BoxArrowRight
                    color="#22c55e"
                    size={20}
                    style={{ cursor: "pointer" }}
                  />
                  <Span>
                    Możliwość anulowania subskrypcji w każdym momencie!
                  </Span>
                </Wrapper>
                <Wrapper>
                  <BoxSeam
                    color="#22c55e"
                    size={20}
                    style={{ cursor: "pointer" }}
                  />
                  <Span>Wysyłka co tydzień w czwartek</Span>
                </Wrapper>
                <Wrapper>
                  <Cash
                    color="#22c55e"
                    size={20}
                    style={{ cursor: "pointer" }}
                  />
                  <Span>Szybkie płatności lub płatność kartą</Span>
                </Wrapper>
              </DeliveryOptions>
              <ButtonWrapper>
                {cart.quantity > 0 ? (
                  <Link
                    to={"/dostawa"}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      textDecoration: "none",
                    }}
                  >
                    <NextButton>Przejdz do dostawy</NextButton>
                  </Link>
                ) : (
                  <NextButton
                    style={{ backgroundColor: "#ddd", cursor: "not-allowed" }}
                  >
                    Przejdz do dostawy
                  </NextButton>
                )}

                <Link
                  to={"/"}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    textDecoration: "none",
                  }}
                >
                  <NextButton>Wracam do zakupów</NextButton>
                </Link>
              </ButtonWrapper>
            </PriceContainer>
          </Wrapper>
        </BodyContainer>
      </Container>
    </MainContainer>
  );
};

export default Cart;
