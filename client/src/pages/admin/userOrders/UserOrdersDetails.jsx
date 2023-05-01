import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";
import TopNav from "../../../components/topNav/TopNav";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

const BackgroundContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #eceff1;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 5% 60px;
`;

const CenterContainer = styled.div`
  max-width: 1200px;
  width: 100%;
  background-color: #fff;
  padding: 20px;
`;

const AdminTextContainer = styled.div`
  margin: 20px 0;
`;

const AdminTextTitle = styled.h2``;
const OrderWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;
const OrderShop = styled.div`
  flex: 1;
  min-width: 300px;
`;
const OrderBaselinker = styled.div`
  flex: 1;
  min-width: 300px;
`;

const DataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 30px;
`;

const TextData = styled.p``;
const TextTitle = styled.h3``;

const ProductContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const ProductBody = styled.div``;
const UserOrdersDetails = () => {
  const user = useSelector((state) => state.user.currentUser);
  const location = useLocation();

  const id = location.pathname.split("/")[3];

  const [order, setOrder] = useState({});
  const orderProduct = order.products;
  useEffect(() => {
    const getSingleOrder = async () => {
      try {
        const res = await userRequest.get(`/orders/find/order/${id}`, {
          headers: { token: `Bearer ${user.accessToken}` },
        });
        setOrder(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getSingleOrder();
  }, [user.accessToken, id]);

  console.log(order);
  return (
    <div className="app">
      <BackgroundContainer>
        <TopNav />
        <MainContainer>
          <CenterContainer>
            <AdminTextContainer>
              <AdminTextTitle>
                Szczegóły produktu - Id zamówienia: {order?._id} | zamówienie
                od: {order?.address?.username}
              </AdminTextTitle>
              <OrderWrapper>
                <OrderShop>
                  <DataWrapper>
                    <TextTitle>Dane do wysyłki</TextTitle>
                    <TextData>Imię i nazwisko: {order?.address?.name}</TextData>
                    <TextData>
                      Ulica i numer: {order?.address?.delivery}
                    </TextData>
                    <TextData>Kod pocztowy: {order?.address?.zip}</TextData>
                    <TextData>Miasto: {order?.address?.city}</TextData>
                    <TextData>Adres email: {order?.address?.email}</TextData>
                  </DataWrapper>

                  <DataWrapper>
                    <TextTitle>Produkty w zamówieniu</TextTitle>
                    {orderProduct?.map((product) => {
                      return (
                        <ProductContainer key={product?.productId}>
                          <ProductBody>{product?.quantity} x </ProductBody>
                          <ProductBody>{product?.productName}</ProductBody>
                        </ProductContainer>
                      );
                    })}
                  </DataWrapper>
                </OrderShop>
              </OrderWrapper>
            </AdminTextContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default UserOrdersDetails;
