import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";
import Navigation from "../../../components/nav/Navigation";
import { Bag, Cart, DoorClosed, Truck } from "react-bootstrap-icons";
import AdminSidebar from "../../../components/adminsidebar/AdminSidebar";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

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
  width: 40%;
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
const HomeAdmin = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(user.currentUser.username);
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
                <Link to={"/admin/moje-zamowienia"}>
                  <AdminCart>
                    <Ring>
                      <Bag color="#0d9488" size={35} />
                    </Ring>
                    <AdminCartTitle>Zamówienia</AdminCartTitle>
                  </AdminCart>
                </Link>
                <Link to={"/admin/adres-dostawy"}>
                  <AdminCart>
                    <Ring>
                      <Truck color="#0d9488" size={35} />
                    </Ring>
                    <AdminCartTitle>Adres dostawy</AdminCartTitle>
                  </AdminCart>
                </Link>
                <Link to={"/koszyk"}>
                  <AdminCart>
                    <Ring>
                      <Cart color="#0d9488" size={35} />
                    </Ring>
                    <AdminCartTitle>Koszyk Zakupów</AdminCartTitle>
                  </AdminCart>
                </Link>
                <AdminCart>
                  <Ring>
                    <DoorClosed color="#0d9488" size={35} />
                  </Ring>
                  <AdminCartTitle>Wyloguj</AdminCartTitle>
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
