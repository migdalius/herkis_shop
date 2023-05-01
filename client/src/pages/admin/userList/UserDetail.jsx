import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";

import TopNav from "../../../components/topNav/TopNav";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: auto;
  background-color: #eceff1;
`;

const MainContainer = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  margin-left: 5%;
  margin-right: 5%;
  gap: 10px;
  padding-bottom: 60px;

  @media (max-width: 768px) {
    margin-top: 30px;
    margin-left: 0;
    margin-right: 0;
  }
`;

const CenterContainer = styled.div`
  width: 100%;
  max-width: 800px;
  height: auto;
  background-color: #fff;

  @media (max-width: 910px) {
    max-width: 600px;
  }

  @media (max-width: 620px) {
    max-width: 100%;
  }
`;

const AdminCenterContainer = styled.div``;

const AdminTextContainer = styled.div`
  margin: 20px;
`;

const AdminTextTitle = styled.h3`
  font-size: 20px;
  padding-bottom: 20px;
  padding-top: 20px;
`;

const AdminTextDesc = styled.div`
  font-size: 14px;
  color: #222;
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ProductContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 700px;
  height: auto;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 15px;
  border-radius: 5px;

  @media (max-width: 768px) {
    max-width: 100%;
    flex-direction: column;
    padding: 10px;
  }
`;

const ProductLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 10px;
  }
`;

const ProductRight = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const SingleProductContainer = styled.div`
  display: flex;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-bottom: 5px;
`;

const Title = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #8f8f8f;
`;

const ButtonWraper = styled.button`
  background-color: transparent;
  border: 1px solid #222;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 3px;
  padding: 5px;
  transition: 0.3s;

  &:hover {
    background-color: #22c55e;
    color: #fff;
    cursor: pointer;
    border: 1px solid #ddd;
  }
`;
const UserDetail = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[3];
  const currentUser = useSelector((state) => state.user.currentUser);
  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get(`/users/find/${id}`, {
          headers: { token: `Bearer ${currentUser.accessToken}` },
        });
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [id]);

  const userId = user._id;

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get(`/orders/find/${userId}`, {
          headers: { token: `Bearer ${currentUser.accessToken}` },
        });
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [userId]);

  return (
    <div className="app">
      <BackgroundContainer>
        <TopNav />
        <MainContainer>
          <CenterContainer>
            <AdminCenterContainer>
              <AdminTextContainer>
                <AdminTextTitle>Użytkownik: {user.username}</AdminTextTitle>
                <TextWrap>
                  <AdminTextDesc>ID użytkownika: {user._id}</AdminTextDesc>
                  <AdminTextDesc>Imię i Nazwisko: {user.name}</AdminTextDesc>
                  <AdminTextDesc>
                    Adres dostawy: {user.delivery}, {user.zip} {user.city}
                  </AdminTextDesc>
                  <AdminTextDesc>E-mail: {user.email}</AdminTextDesc>
                  <AdminTextDesc>Telefon: {user.phone}</AdminTextDesc>
                  <AdminTextDesc>
                    Konto utworzone: {user.createdAt}
                  </AdminTextDesc>
                </TextWrap>
                <AdminTextTitle>Zamówienia użytkownika:</AdminTextTitle>
                {products.map((product) => {
                  return (
                    <ProductContainer key={product._id}>
                      <ProductLeft>
                        <Title>Adres dostawy zamówienia:</Title>
                        <AdminTextDesc>
                          Imię i nazwisko: {product.address.name}
                        </AdminTextDesc>
                        <AdminTextDesc>
                          ul. {product.address.delivery}
                        </AdminTextDesc>
                        <AdminTextDesc>
                          Kod pocztowy: {product.address.zip}
                        </AdminTextDesc>
                        <AdminTextDesc>
                          Miasto: {product.address.city}
                        </AdminTextDesc>
                        <AdminTextDesc>
                          Data zamówienia: {product.createdAt}
                        </AdminTextDesc>
                      </ProductLeft>
                      <ProductRight>
                        <Title>Produkty z zamówienia:</Title>
                        <AdminTextDesc>
                          Suma zamówienia: {product.amount} zł
                        </AdminTextDesc>
                        <AdminTextDesc>
                          Status zamówienia: {product.status}
                        </AdminTextDesc>
                        <AdminTextDesc>
                          {product.products.map((product) => {
                            return (
                              <Container key={product._id}>
                                <Link
                                  style={{ textDecoration: "none" }}
                                  to={`../subskrypcja/${product.productId}`}
                                >
                                  <ButtonWraper>
                                    <AdminTextDesc>
                                      Numer Produktu: {product.productId}
                                    </AdminTextDesc>
                                    <AdminTextDesc>
                                      Ilość: {product.quantity}
                                    </AdminTextDesc>
                                  </ButtonWraper>
                                </Link>
                              </Container>
                            );
                          })}
                          <AdminTextDesc>
                            Suma zamówienia: {product.amount} zł
                          </AdminTextDesc>
                        </AdminTextDesc>
                      </ProductRight>
                    </ProductContainer>
                  );
                })}
              </AdminTextContainer>
            </AdminCenterContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default UserDetail;
