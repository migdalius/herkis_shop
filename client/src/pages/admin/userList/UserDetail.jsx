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
  height: 100vh;
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
`;
const AdminTextDesc = styled.p`
  font-size: 14px;
  color: #222;
`;
const UserDetail = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[3];

  const [user, setUser] = useState({});

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await userRequest.get(`/users/find/${id}`);
        setUser(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  console.log(user);
  return (
    <div className="app">
      <BackgroundContainer>
        <TopNav />
        <MainContainer>
          <CenterContainer>
            <AdminCenterContainer>
              <AdminTextContainer>
                <AdminTextTitle>Użytkownik: {user.username}</AdminTextTitle>
                <AdminTextDesc>Imię i Nazwisko: {user.name}</AdminTextDesc>
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
