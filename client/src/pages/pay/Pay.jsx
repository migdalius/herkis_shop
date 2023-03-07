import styled, { keyframes } from "styled-components";
import {
  Basket,
  BoxArrowRight,
  BoxSeam,
  Cash,
  CreditCard,
  CreditCard2Back,
  LockFill,
  ShieldCheck,
  TrashFill,
  Truck,
} from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const MainContainer = styled.div`
  background-color: #f4f6f9;
  width: 100vw;
  height: auto;
  padding-bottom: 20px;
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
  @media (max-width: 625px) {
    width: 500px;
  }
  @media (max-width: 515px) {
    width: 400px;
  }
  @media (max-width: 420px) {
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
  @media (max-width: 710px) {
    flex-direction: column;
  }
`;
const CartContainer = styled.div`
  width: 670px;
  height: auto;
  padding-bottom: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media (max-width: 1080px) {
    width: 600px;
  }
  @media (max-width: 935px) {
    width: 500px;
  }
  @media (max-width: 835px) {
    width: 400px;
  }
  @media (max-width: 710px) {
    width: 600px;
  }
  @media (max-width: 625px) {
    width: 500px;
  }
  @media (max-width: 515px) {
    width: 400px;
  }
  @media (max-width: 420px) {
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
  @media (max-width: 1080px) {
    width: 300px;
  }
  @media (max-width: 835px) {
    width: 270px;
  }
  @media (max-width: 710px) {
    width: 400px;
  }
  @media (max-width: 515px) {
    width: 300px;
  }
  @media (max-width: 420px) {
    width: 200px;
  }
`;
const Wrapper = styled.div``;
const Title = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
  @media (max-width: 515px) {
    font-size: 28px;
  }
`;

const FormContainer = styled.form`
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
  background-color: #22c55e;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 15px;
  @media (max-width: 420px) {
    margin-top: 20px;
  }
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
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
`;

const WrapButton = styled.div`
  padding: 10px;
`;
const PayButton = styled.button`
  width: 100%;
  height: 60px;
  border: none;
  background-color: #f1f5f9;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #e2e8f0;
  }
`;
const ImgPay = styled.img`
  height: 50px;
`;

const DescWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
const Desc = styled.p`
  font-size: 18px;
`;

const PayTitleWrapper = styled.div`
  display: flex;
  gap: 10px;
  margin: 10px;
  margin-left: 40px;
  font-size: 18px;
  font-weight: 600;
`;
const PayTitle = styled.p``;

const FormWrapper = styled.div``;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
`;
const Input = styled.input`
  /* border: 1px solid #bfbfbf; */
  border-radius: 5px;
  width: 550px;
  height: 40px;
  padding: 10px;
  border: none;
  @media (max-width: 935px) {
    width: 400px;
  }
  @media (max-width: 835px) {
    width: 300px;
  }
  @media (max-width: 710px) {
    width: 450px;
  }
  @media (max-width: 625px) {
    width: 400px;
  }
  @media (max-width: 515px) {
    width: 300px;
  }
  @media (max-width: 420px) {
    width: 200px;
  }

  &:focus {
    outline: none !important;
    border: 1px solid #22c55e;
  }
`;

const InputHolder = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding: 10px;
  width: 550px;
  @media (max-width: 935px) {
    width: 440px;
  }
  @media (max-width: 835px) {
    width: 340px;
  }
  @media (max-width: 710px) {
    width: 500px;
  }
  @media (max-width: 625px) {
    width: 400px;
  }
  @media (max-width: 515px) {
    width: 300px;
  }
  @media (max-width: 420px) {
    width: 250px;
  }
`;

const InputWrapper = styled.div`
  display: flex;
  width: 550px;
  gap: 30px;
`;

const SingleInput = styled.input`
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  height: 60px;
  padding: 10px;
  width: 260px;
  @media (max-width: 935px) {
    width: 180px;
  }
  @media (max-width: 835px) {
    width: 130px;
  }
  @media (max-width: 710px) {
    width: 210px;
  }
  @media (max-width: 625px) {
    width: 160px;
  }
  @media (max-width: 515px) {
    width: 110px;
  }
  @media (max-width: 420px) {
    width: 80px;
  }

  &:focus {
    outline: none !important;
    border: 1px solid #22c55e;
  }
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  border: 1px solid #bfbfbf;
  padding: 10px;
`;
const SecondInput = styled.input`
  border: none;
  height: 40px;
  padding: 10px;
  width: 260px;
  @media (max-width: 935px) {
    width: 180px;
  }
  @media (max-width: 835px) {
    width: 130px;
  }
  @media (max-width: 710px) {
    width: 210px;
  }
  @media (max-width: 625px) {
    width: 160px;
  }
  @media (max-width: 515px) {
    width: 110px;
  }
  @media (max-width: 420px) {
    width: 95px;
  }

  &:focus {
    outline: none !important;
    border: 1px solid #22c55e;
  }
`;

const WrapAlert = styled.div`
  display: flex;
  justify-content: center;
`;
const AlertDesc = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: 600px;
  height: 60px;
  background-color: #fffdef;
  margin: 20px;
`;

const WrapSecondAlert = styled.div`
  display: flex;
  justify-content: center;
`;

const SecondAlertDec = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  width: 600px;
  height: 120px;
  background-color: #f3fbfd;
  padding: 20px;
  @media (max-width: 420px) {
    margin-top: 20px;
  }
`;

const Pay = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <MainContainer>
      <Container>
        <Logo src="../img/herkis_logo.png" />
        <NavigationContainer>
          <NavItem>
            <Basket color="#222" size={30} />
            <CategoryTitle>Koszyk</CategoryTitle>
          </NavItem>
          <Line />
          <NavItem>
            <Truck color="#222" size={30} />
            <CategoryTitle>Dostawa</CategoryTitle>
          </NavItem>
          <Line />
          <NavItem>
            <CreditCard2Back color="#22c55e" size={30} />
            <CategoryTitle>Płatności</CategoryTitle>
          </NavItem>
        </NavigationContainer>
        <BodyContainer>
          <Wrapper>
            <Title>Rodzaj płatności</Title>
            <CartContainer>
              <WrapButton>
                <PayButton>
                  <ImgPay src="../img/dotpay.png" />
                </PayButton>
                <DescWrap>
                  <Desc>Lub</Desc>
                </DescWrap>
              </WrapButton>
              <PayTitleWrapper>
                <LockFill color="#22c55e" size={20} />
                <PayTitle>Zapłać kartą</PayTitle>
              </PayTitleWrapper>
              <FormContainer>
                <FormWrapper>
                  <Form>
                    <InputHolder>
                      <Input placeholder="1234 5678 9012 3456" />
                      <CreditCard color="#22c55e" size={26} />
                    </InputHolder>
                    <InputWrapper>
                      <SingleInput placeholder="MM/YY" />
                      <Wrap>
                        <SecondInput placeholder="123" />
                        <CreditCard2Back color="#22c55e" size={26} />
                      </Wrap>
                    </InputWrapper>
                  </Form>
                </FormWrapper>
              </FormContainer>
              <WrapAlert>
                <AlertDesc>
                  Klikając „Złóż zamówienie”, wyrażasz zgodę na nasze Warunki i
                  Politykę prywatności.
                </AlertDesc>
              </WrapAlert>
              <WrapSecondAlert>
                <SecondAlertDec>
                  Klikając „Złóż zamówienie”, zgadzasz się, że wybrane
                  subskrypcje będą automatycznie odnawiane na kolejne warunki
                  subskrypcji, dopóki nie anulujesz. Po każdym odnowieniu Twoja
                  metoda płatności zostanie automatycznie obciążona opłatą w
                  wysokości 39,99zł. Możesz anulować swoje subskrypcje (zgodnie
                  z warunkami naszej Polityki anulowania, którą znajdziesz
                  tutaj), postępując zgodnie z instrukcjami na stronie konta
                  Herkis lub wysyłając wiadomość e-mail na adres
                  kontakt@herkis.pl.
                </SecondAlertDec>
              </WrapSecondAlert>
              <ButtonWrapper>
                <NextButton>Złóż Zamówienie</NextButton>
              </ButtonWrapper>
            </CartContainer>
          </Wrapper>
          <Wrapper>
            <Title>Podsumowanie</Title>
            <PriceContainer>
              <PriceWrap>
                <ProductTitle>Koszt Subskrypcji</ProductTitle>
                <Price>{cart.total} zł</Price>
              </PriceWrap>
            </PriceContainer>
          </Wrapper>
        </BodyContainer>
      </Container>
    </MainContainer>
  );
};

export default Pay;
