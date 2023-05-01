import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";
import OrderTable from "../../../components/orderTable/OrderTable";

import TopNav from "../../../components/topNav/TopNav";
import { userRequest } from "../../requestMethods";
import ProductTable from "../../../components/table/ProductTable";
import { useState } from "react";
import { useEffect } from "react";

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
  @media (max-width: 1130px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const CenterContainer = styled.div`
  width: 1600px;
  height: auto;
  background-color: #fff;

  @media (max-width: 1800px) {
    width: 1400px;
  }
  @media (max-width: 1580px) {
    width: 1200px;
  }

  @media (max-width: 1350px) {
    width: 1000px;
  }

  @media (max-width: 1130px) {
    width: 100%;
  }
`;

const AdminCenterContainer = styled.div``;

const AdminTextContainer = styled.div`
  margin: 20px;
`;

const AdminTextTitle = styled.h2``;

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("products");
        const data = await res.data;
        setProducts(data);
      } catch (error) {
        console.error(error);
      }
    };
    getOrders();
  }, []);

  return (
    <div className="app">
      <BackgroundContainer>
        <TopNav />
        <MainContainer>
          <CenterContainer>
            <AdminCenterContainer>
              <AdminTextContainer>
                <AdminTextTitle>Wszystkie produkty</AdminTextTitle>
                <ProductTable products={products} />
              </AdminTextContainer>
            </AdminCenterContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default Products;
