import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";

import { Bag, Cart, DoorClosed, Truck } from "react-bootstrap-icons";
import AdminSidebar from "../../../components/adminsidebar/AdminSidebar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import TopNav from "../../../components/topNav/TopNav";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: auto;
  background-color: #eceff1;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 50px;
  gap: 10px;
  padding-bottom: 60px;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const LeftContainer = styled.div`
  width: 300px;
  height: 350px;
  background-color: #fff;
  @media (max-width: 1370px) {
    width: 250px;
  }
  @media (max-width: 1090px) {
    width: 200px;
  }
  @media (max-width: 815px) {
    width: 150px;
  }
  @media (max-width: 640px) {
    width: 500px;
  }
  @media (max-width: 535px) {
    width: 400px;
  }
  @media (max-width: 430px) {
    width: 300px;
  }
`;

const CenterContainer = styled.div`
  width: 900px;
  height: 500px;
  background-color: #fff;
  @media (max-width: 1370px) {
    width: 800px;
  }
  @media (max-width: 1205px) {
    width: 700px;
  }
  @media (max-width: 1090px) {
    width: 600px;
  }
  @media (max-width: 925px) {
    width: 500px;
    height: 600px;
  }
  @media (max-width: 815px) {
    width: 400px;
  }
  @media (max-width: 640px) {
    width: 500px;
  }
  @media (max-width: 535px) {
    width: 400px;
  }
  @media (max-width: 430px) {
    width: 300px;
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
  @media (max-width: 430px) {
    width: 250px;
    height: 250px;
  }
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
  @media (max-width: 925px) {
    grid-template-rows: 200px 200px 200px;
    grid-template-columns: 200px 200px;
  }
  @media (max-width: 430px) {
    grid-template-rows: 250px 250px 250px 250px;
    grid-template-columns: 1fr;
    gap: 10px;
  }
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
const HomeAdmin = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    window.location.href = "/";
  };
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
                <AdminTextTitle>
                  Hej, {user.currentUser.username}
                </AdminTextTitle>
                <AdminTextDesc>
                  W ustawieniach swojego konta możesz przejrzeć swoje zamówienia
                  i zwroty, zarządzać adresami dostaw oraz sprawdzić instrukcje
                  uprawy produktów które zamówiłeś. W tym miejscu możesz także
                  zmienić hasło do konta i sprawdzić jego ustawienia.
                </AdminTextDesc>
              </AdminTextContainer>
              <AdminCartContener>
                <Link
                  to={"/moje-konto/moje-zamowienia"}
                  style={{
                    textDecoration: "none",
                    color: "#222",
                  }}
                >
                  <AdminCart>
                    <Ring>
                      <Bag color="#22c55e" size={35} />
                    </Ring>
                    <AdminCartTitle>Zamówienia</AdminCartTitle>
                  </AdminCart>
                </Link>
                <Link
                  to={"/moje-konto/adres-dostawy"}
                  style={{
                    textDecoration: "none",
                    color: "#222",
                  }}
                >
                  <AdminCart>
                    <Ring>
                      <Truck color="#22c55e" size={35} />
                    </Ring>
                    <AdminCartTitle>Adres dostawy</AdminCartTitle>
                  </AdminCart>
                </Link>
                <Link
                  to={"/koszyk"}
                  style={{
                    textDecoration: "none",
                    color: "#222",
                  }}
                >
                  <AdminCart>
                    <Ring>
                      <Cart color="#22c55e" size={35} />
                    </Ring>
                    <AdminCartTitle>Koszyk Zakupów</AdminCartTitle>
                  </AdminCart>
                </Link>
                <AdminCart>
                  <Ring>
                    <DoorClosed color="#22c55e" size={35} />
                  </Ring>
                  <AdminCartTitle onClick={handleLogout}>
                    Wyloguj
                  </AdminCartTitle>
                </AdminCart>
              </AdminCartContener>
            </AdminCenterContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default HomeAdmin;
