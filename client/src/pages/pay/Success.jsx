import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import TopNav from "../../components/topNav/TopNav";
import Footer from "../../components/footer/Footer";
import { userRequest } from "../requestMethods";
import { useSelector } from "react-redux";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: auto;
  background-color: #eceff1;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;

  margin-top: 50px;
  gap: 10px;
  padding-bottom: 60px;
`;

const Center = styled.div`
  width: 500px;
  height: 450px;
  background-color: #fff;
  display: flex;
  flex-direction: column;

  align-items: center;

  padding-top: 40px;
`;

const Wrap = styled.div`
  display: flex;
  gap: 20px;
  width: 400px;
`;
const Icon = styled.img`
  width: 50px;
  height: 50px;
`;
const Title = styled.h2``;
const TitleSpan = styled.div`
  color: #22c55e;
`;

const Desc = styled.p`
  margin-top: 20px;
`;

const OrderButton = styled.button`
  width: 100%;
  height: 40px;
  border-radius: 5px;
  border: none;
  background-color: #22c55e;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const Wraps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 400px;
`;

const Success = () => {
  const location = useLocation();
  const [done, setDone] = useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const handleOrder = async () => {
    try {
      const res = await userRequest.post(`/orders`, {
        userId: user._id,
        products: cart.products.map((item) => {
          return {
            productId: item._id,
            quantity: item.quantity,
          };
        }),

        amount: (Math.round(cart.total * 100) / 100).toFixed(2),
        address: {
          name: user.name,
          city: user.city,
          delivery: user.delivery,
          email: user.email,
          zip: user.zip,
          username: user.username,
        },
      });

      setDone(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="app">
      <BackgroundContainer>
        <TopNav />
        <MainContainer>
          <Center>
            {location.state.status === "succeeded" ? (
              <>
                <Wrap>
                  <Icon src="../img/check.png" />
                  <Title>
                    Status transakcji: <TitleSpan>wykonana</TitleSpan>
                  </Title>
                </Wrap>
                <Wraps>
                  <Desc>
                    Informujemy, że płatność powiodła się. Rachunek został
                    obciążony kwotą płatności{" "}
                    {location.state.amount
                      .toString()
                      .replace(/(?!^)(?=(?:\d{3})*\d{2}(?:\.|$))/g, ",")}{" "}
                    PLN.
                  </Desc>
                  <Desc>
                    W celu skontaktowania się ze sprzedawcą prosimy o wysłanie
                    wiadomości e-mail na adres nyjepl@gmail.com. Wszelkie
                    pytania dotyczące realizacji zamówienia prosimy kierować
                    bezpośrednio do nas, powołując się na numer transakcji{" "}
                    {location.state.id}.
                  </Desc>
                  <Link to={"/moje-konto/moje-zamowienia"}>
                    <OrderButton onClick={handleOrder}>
                      Sprawdź swoje zamówienia
                    </OrderButton>
                  </Link>
                </Wraps>
              </>
            ) : (
              <Wrap>
                <Icon src="../img/no.png" />
                <Title>
                  Status transakcji: <TitleSpan>anulowana</TitleSpan>
                </Title>
              </Wrap>
            )}
          </Center>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default Success;
