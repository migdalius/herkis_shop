import styled, { keyframes } from "styled-components";
import Footer from "../../components/footer/Footer";

import TopNav from "../../components/topNav/TopNav";
import { Link } from "react-router-dom";

import { Basket, Clock } from "react-bootstrap-icons";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../redux/cartRedux";
import Counter from "../../components/counter/Counter";
import Modal from "react-modal";

const MainContainer = styled.div`
  height: auto;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Container = styled.div`
  display: flex;
  width: 1400px;
  height: auto;
  background-color: #fff;

  @media (max-width: 1215px) {
    width: 900px;
  }
  @media (max-width: 915px) {
    width: 700px;
  }
  @media (max-width: 710px) {
    flex-direction: column-reverse;
    width: 500px;
  }
  @media (max-width: 510px) {
    width: 400px;
  }
  @media (max-width: 410px) {
    width: 300px;
  }
`;
const Wrap = styled.div`
  width: 50%;
  margin: 20px;
  @media (max-width: 710px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 600px;
  height: auto;
  @media (max-width: 1215px) {
    width: 400px;
  }
  @media (max-width: 915px) {
    width: 300px;
  }
  @media (max-width: 710px) {
    width: 450px;
  }
  @media (max-width: 510px) {
    width: 350px;
  }
  @media (max-width: 410px) {
    width: 270px;
  }
`;

const Desc = styled.div``;
const Title = styled.h3`
  font-size: 32px;
`;

const Time = styled.p`
  color: #6b7284;
  margin-top: 20px;
`;

const Line = styled.div`
  border-top: 1px solid #ddd;
  width: 50%;
  margin-top: 20px;
  @media (max-width: 710px) {
    width: 90%;
  }
`;

const WrapContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
`;

const Txt = styled.p`
  color: #6b7284;
`;

const PriceContainer = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 10px;
  width: 600px;
  @media (max-width: 1215px) {
    flex-direction: column;
    width: 400px;
  }
  @media (max-width: 915px) {
    width: 300px;
  }
  @media (max-width: 710px) {
    width: 450px;
  }
  @media (max-width: 510px) {
    width: 360px;
  }
  @media (max-width: 410px) {
    width: 270px;
  }
`;
const PriceWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 10px;
  align-items: center;
  flex: 1;
  border: 1px solid #ddd;
  height: 440px;
  border-radius: 5px;
`;

const PriceTitle = styled.p`
  margin: 10px;
  font-size: 18px;
  font-weight: 600;
  color: #22c55e;
`;

const SubContainer = styled.div`
  display: flex;
  width: 270px;
  height: 85px;

  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ddd;
  @media (max-width: 1215px) {
    width: 360px;
  }
  @media (max-width: 915px) {
    width: 260px;
  }
  @media (max-width: 710px) {
    width: 400px;
    margin: 10px;
  }
  @media (max-width: 510px) {
    width: 300px;
  }
  @media (max-width: 410px) {
    width: 240px;
  }
`;

const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 60%;
  margin: 8px;
  @media (max-width: 1215px) {
    width: 70%;
  }
`;
const RightContainer = styled.div`
  width: 40%;
  @media (max-width: 1215px) {
    width: 30%;
  }
`;

const TitleContainer = styled.p``;
const TitleContainerPrice = styled.p`
  color: #222;
  font-size: 11px;
  @media (max-width: 1215px) {
    font-size: 14px;
  }
`;

const SubTitlePrice = styled.p`
  color: #6b7284;
  font-size: 12px;
`;

const Button = styled.button`
  height: 100%;
  width: 100%;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #fbbf24;
  }
`;

const Deliver = styled.h3`
  font-size: 24px;
  color: #22c55e;
  margin-top: 5px;
`;

const BigTitle = styled.h2`
  margin: 10px;
`;
const BigDesc = styled.p`
  margin: 20px;
`;

const List = styled.ul`
  margin: 20px;
`;
const ListItem = styled.li`
  margin-top: 10px;
`;

const BigDescTitle = styled.p`
  font-weight: 600;
  margin: 10px;
`;

const ProductName = styled.p`
  font-size: 14px;
`;
const Sub = () => {
  const [product, setProduct] = useState({});

  const [products, setProducts] = useState([]);

  const [months, setMonths] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products?category=week"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products?category=month"
        );
        setMonths(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <>
      <TopNav />
      <MainContainer>
        <Container>
          <Wrap>
            <Img src="../img/product.png" />
            <Desc>
              <BigTitle>Po co mi zestaw do uprawy?</BigTitle>
              <BigDesc>
                Prawdopodobnie, zawsze myślałeś/aś ,że fajnie byłoby mieć jakieś
                rośliny w domu. Natomiast kupienie sadzonki w markecie lub
                kwiatów w kwiaciarni to niestety nie to samo, co zasadzenie i
                dbanie o roślinę.
              </BigDesc>
              <BigDescTitle>
                Zestaw rozwiązuje dwa główne problemy:
              </BigDescTitle>
              <List>
                <ListItem>
                  Zawiera wszystkie elementy potrzebne do uprawy, wystarczy
                  dodać tylko wody.
                </ListItem>
                <ListItem>
                  Instrukcja krok po kroku jak należy uprawiać roślinę.
                </ListItem>
              </List>
              <BigDescTitle>
                I Najważniejszy element, dlaczego powinieneś kupić zestaw:
              </BigDescTitle>
              <BigDesc>
                Ponieważ, nie wiesz co będziesz uprawiać i to jest największa
                przyjemność, niepewność i ciekawość co z tego wyrośnie?
              </BigDesc>
            </Desc>
          </Wrap>
          <Wrap>
            <Title>Zestaw do uprawy Domowej</Title>
            <Time>Numer zestawu do uprawy: 01/2023</Time>
            <Deliver>Darmowa Dostawa - Kurierem</Deliver>
            <Line />
            <WrapContainer>
              <Clock color="#22c55e" size={22} />
              <Txt>Następny zestaw pojawi się za:</Txt>
            </WrapContainer>
            <Counter />
            <Line />
            <PriceContainer>
              <PriceWrap>
                <PriceTitle>Nowy zestaw co tydzień</PriceTitle>
                {products.map((item) => {
                  return (
                    <SubContainer key={item._id}>
                      <LeftContainer>
                        <ProductName>{item.title}</ProductName>
                        <TitleContainerPrice>
                          {item.price} zł / miesięcznie
                        </TitleContainerPrice>
                        <SubTitlePrice>
                          Oszczędzasz {item.bonus} zł
                        </SubTitlePrice>
                      </LeftContainer>
                      <RightContainer>
                        <Link to={`../subskrypcja/${item._id}`}>
                          <Button>Subskrybuj</Button>
                        </Link>
                      </RightContainer>
                    </SubContainer>
                  );
                })}
              </PriceWrap>
              <PriceWrap>
                <PriceTitle>Nowy zestaw co miesiąc</PriceTitle>
                {months.map((item) => {
                  return (
                    <SubContainer key={item._id}>
                      <LeftContainer>
                        <ProductName>{item.title}</ProductName>
                        <TitleContainerPrice>
                          {item.price} zł / miesięcznie
                        </TitleContainerPrice>
                        <SubTitlePrice>
                          Oszczędzasz {item.bonus} zł
                        </SubTitlePrice>
                      </LeftContainer>
                      <RightContainer>
                        <Link to={`../subskrypcja/${item._id}`}>
                          <Button>Subskrybuj</Button>
                        </Link>
                      </RightContainer>
                    </SubContainer>
                  );
                })}
              </PriceWrap>
            </PriceContainer>
          </Wrap>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Sub;
