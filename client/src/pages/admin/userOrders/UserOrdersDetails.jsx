import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";
import TopNav from "../../../components/topNav/TopNav";
import { userRequest } from "../../requestMethods";
import { useSelector } from "react-redux";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
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
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const CenterContainer = styled.div`
  width: 1600px;
  height: auto;

  background-color: #fff;
`;

const AdminCenterContainer = styled.div``;

const AdminTextContainer = styled.div`
  margin: 20px;
`;

const AdminTextTitle = styled.h2``;
const OrderWraper = styled.div`
  margin-top: 40px;
  display: flex;
`;

const OrderShop = styled.div`
  flex: 1;
`;
const OrderBaselinker = styled.div`
  flex: 1;
`;

const DataWraper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 30px;
`;

const TextData = styled.p``;
const TextTitle = styled.h3``;

const ProductContainer = styled.div`
  display: flex;
  gap: 10px;
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
            <AdminCenterContainer>
              <AdminTextContainer>
                <AdminTextTitle>
                  Szczegóły produktu - Id zamówienia: {order?._id} | zamówienie
                  od: {order?.address?.username}
                </AdminTextTitle>
                <OrderWraper>
                  <OrderShop>
                    <DataWraper>
                      <TextTitle>Dane do wysyłki</TextTitle>
                      <TextData>
                        Imię i nazwisko: {order?.address?.name}
                      </TextData>
                      <TextData>
                        Ulica i numer: {order?.address?.delivery}
                      </TextData>
                      <TextData>Kod pocztowy: {order?.address?.zip}</TextData>
                      <TextData>Miasto: {order?.address?.city}</TextData>
                      <TextData>Adres email: {order?.address?.email}</TextData>
                    </DataWraper>

                    <DataWraper>
                      <TextTitle>Produkty w zamówieniu</TextTitle>
                      {orderProduct?.map((product) => {
                        return (
                          <ProductContainer key={product?.productId}>
                            <ProductBody>{product?.quantity} x </ProductBody>
                            <ProductBody>{product?.productName}</ProductBody>
                          </ProductContainer>
                        );
                      })}
                    </DataWraper>
                  </OrderShop>
                  <OrderBaselinker>Baselinker</OrderBaselinker>
                </OrderWraper>
              </AdminTextContainer>
            </AdminCenterContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default UserOrdersDetails;
