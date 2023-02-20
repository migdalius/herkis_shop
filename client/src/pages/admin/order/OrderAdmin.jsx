import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";
import Navigation from "../../../components/nav/Navigation";

import AdminSidebar from "../../../components/adminsidebar/AdminSidebar";
import OrderProduct from "../../../components/orderproduct/OrderProduct";
import { useEffect, useState } from "react";
import axios from "axios";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: auto;
  background-color: #eceff1;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1920px;
  height: 100vh;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 50px;
  gap: 10px;
  padding-bottom: 60px;
`;

const LeftContainer = styled.div`
  width: 12%;
  height: 350px;
  background-color: #fff;
`;

const CenterContainer = styled.div`
  width: 45%;
  height: 500px;
  background-color: #fff;
`;

const AdminCenterContainer = styled.div``;
const AdminCart = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 150px;
  background-color: #ddd;
  border-radius: 5px;
  cursor: pointer;
`;

const AdminCartTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  padding-top: 10px;
`;
const AdminTextContainer = styled.div`
  margin: 20px;
`;
const AdminTextTitle = styled.h3`
  font-size: 20px;
  padding-bottom: 20px;
`;
const AdminTextDesc = styled.p`
  font-size: 14px;
`;

const AdminCartContener = styled.div`
  display: grid;
  grid-template-rows: 200px 200px;
  grid-template-columns: 200px 200px 200px;
  margin: 20px;
`;

const Ring = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  background-color: #fff;
  border-radius: 50%;
`;

const ProductContainer = styled.div`
  display: flex;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const OrderAdmin = () => {
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/orders/find/63c18620cf0c78c4a0cf7ff9"
        );
        setOrders(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <div className="app">
      <BackgroundContainer>
        <Navigation />
        <MainContainer>
          <LeftContainer>
            <AdminSidebar />
          </LeftContainer>
          <CenterContainer>
            <AdminCenterContainer>
              <AdminTextContainer>
                <AdminTextTitle>Moje Zakupy</AdminTextTitle>
              </AdminTextContainer>
              <ProductContainer>
                <OrderProduct />
              </ProductContainer>
            </AdminCenterContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default OrderAdmin;
