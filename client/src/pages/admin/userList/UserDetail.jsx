import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";

import TopNav from "../../../components/topNav/TopNav";
import { userRequest } from "../../requestMethods";

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
  height: 100%;
  margin-left: 5%;
  margin-right: 5%;

  gap: 10px;
  padding-bottom: 60px;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const CenterContainer = styled.div`
  width: 800px;
  height: auto;

  background-color: #fff;
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
const AdminTextDesc = styled.p`
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
  width: 600px;
  height: 200px;
`;
const ProductLeft = styled.div`
  width: 50%;
`;
const ProductRight = styled.div`
  width: 60%;
`;
const UserDetail = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[3];

  const [user, setUser] = useState({});
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get(`/users/find/${id}`);
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
        const res = await userRequest.get(`/orders/find/${userId}`);
        setProducts(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [userId]);
  console.log(products);
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
                    <ProductContainer>
                      <ProductLeft>
                        <AdminTextDesc>Adres dostawy zamówienia:</AdminTextDesc>
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
                        <AdminTextDesc>Produkty z zamówienia:</AdminTextDesc>
                        <AdminTextDesc>
                          Suma zamówienia: {product.amount} zł
                        </AdminTextDesc>
                        <AdminTextDesc>
                          Status zamówienia: {product.status}
                        </AdminTextDesc>
                        <AdminTextDesc>
                          {product.products.map((product) => {
                            <div>{product.productId}</div>;
                          })}
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
