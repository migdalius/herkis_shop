import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";

import { Bag, Cart, DoorClosed, Truck } from "react-bootstrap-icons";
import AdminSidebar from "../../../components/adminsidebar/AdminSidebar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TopNav from "../../../components/topNav/TopNav";
import { logoutSucess } from "../../../redux/userRedux";
import Table from "../../../components/table/Table";
import { userRequest } from "../../requestMethods";

const BackgroundContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  background-color: #eceff1;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 5% 60px 5%;
`;

const CenterContainer = styled.div`
  width: 100%;
  max-width: 1600px;
  background-color: #fff;
`;

const AdminCenterContainer = styled.div``;

const AdminTextContainer = styled.div`
  margin: 20px;
`;
const AdminTextTitle = styled.h3`
  font-size: 20px;
  padding-bottom: 20px;
`;
const AdminTextDesc = styled.p`
  font-size: 14px;
  color: red;
`;

const UserList = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [users, setUsers] = useState([]);
  const user = useSelector((state) => state.user.currentUser);

  useEffect(() => {
    const getOrders = async () => {
      if (user) {
        try {
          const res = await userRequest.get("users", {
            headers: { token: `Bearer ${user.accessToken}` },
          });
          const data = await res.data;
          setUsers(data);
        } catch (error) {
          console.error(error);
        }
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
                <AdminTextTitle>
                  Lista zarejestrowanych użytkowników
                </AdminTextTitle>
                <AdminTextDesc>
                  *Uwaga: usunięcie konta użytkownika z prawami "Admin" jest
                  niemożliwe.
                </AdminTextDesc>
                <Table users={users} />
              </AdminTextContainer>
            </AdminCenterContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default UserList;
