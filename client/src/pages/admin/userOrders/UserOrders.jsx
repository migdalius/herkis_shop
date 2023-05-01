import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";
import OrderTable from "../../../components/orderTable/OrderTable";

import TopNav from "../../../components/topNav/TopNav";
import { userRequest } from "../../requestMethods";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const BackgroundContainer = styled.div`
  width: 100vw;
  min-height: calc(100vh - 70px);
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
  @media (max-width: 905px) {
    margin-left: 0;
    margin-right: 0;
  }
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const CenterContainer = styled.div`
  width: 1400px;
  height: auto;
  background-color: #fff;

  @media (max-width: 1580px) {
    width: 1200px;
  }

  @media (max-width: 1400px) {
    width: 1000px;
  }

  @media (max-width: 1090px) {
    width: 800px;
  }

  @media (max-width: 905px) {
    width: 100%;
  }
`;

const AdminCenterContainer = styled.div``;

const AdminTextContainer = styled.div`
  margin: 20px;
`;

const UserOrders = () => {
  const [orders, setOrders] = React.useState([]);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders", {
          headers: { token: `Bearer ${user.accessToken}` },
        });
        const data = await res.data;
        setOrders(data);
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
                <OrderTable orders={orders} />
              </AdminTextContainer>
            </AdminCenterContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default UserOrders;
