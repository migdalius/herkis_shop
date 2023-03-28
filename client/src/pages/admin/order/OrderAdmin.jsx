import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";

import AdminSidebar from "../../../components/adminsidebar/AdminSidebar";
import OrderProduct from "../../../components/orderproduct/OrderProduct";
import { useEffect, useState } from "react";
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
  justify-content: center;
  width: 100vw;
  height: auto;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 50px;
  gap: 10px;
  padding-bottom: 60px;
  @media (max-width: 815px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: #fff;
  @media (max-width: 1050px) {
    width: 200px;
  }
  @media (max-width: 815px) {
    width: 300px;
  }
`;

const CenterContainer = styled.div`
  width: 900px;
  height: auto;
  background-color: #fff;
  @media (max-width: 1375px) {
    width: 800px;
  }
  @media (max-width: 1260px) {
    width: 700px;
  }
  @media (max-width: 1150px) {
    width: 600px;
  }
  @media (max-width: 920px) {
    width: 500px;
  }
  @media (max-width: 815px) {
    width: 700px;
  }
  @media (max-width: 750px) {
    width: 600px;
  }
  @media (max-width: 640px) {
    width: 500px;
  }
  @media (max-width: 535px) {
    width: 400px;
  }
  @media (max-width: 430px) {
    width: 370px;
    height: auto;
  }
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
  @media (max-width: 535px) {
    width: 370px;
  }
  @media (max-width: 430px) {
    border: none;
  }
`;

const OrderAdmin = () => {
  const [orders, setOrders] = useState([]);
  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  useEffect(() => {
    console.log(user._id);
    const getOrders = async () => {
      try {
        const res = await userRequest.get(`orders/find/${user._id}`);
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
          <LeftContainer>
            <AdminSidebar />
          </LeftContainer>
          <CenterContainer>
            <AdminCenterContainer>
              <AdminTextContainer>
                <AdminTextTitle>Moje Subskrypcje</AdminTextTitle>
              </AdminTextContainer>
              {orders.map((item) => {
                return (
                  <ProductContainer key={item._id}>
                    <OrderProduct item={item} />
                  </ProductContainer>
                );
              })}
            </AdminCenterContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default OrderAdmin;
