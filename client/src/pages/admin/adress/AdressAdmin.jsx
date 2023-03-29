import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import AdminSidebar from "../../../components/adminsidebar/AdminSidebar";
import Footer from "../../../components/footer/Footer";
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
  @media (max-width: 540px) {
    flex-direction: column-reverse;
    height: auto;
    gap: 30px;
  }
`;

const LeftContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: #fff;
  @media (max-width: 1150px) {
    width: 200px;
  }
  @media (max-width: 600px) {
    width: 150px;
  }
  @media (max-width: 540px) {
    width: 400px;
  }
  @media (max-width: 430px) {
    width: 300px;
  }
  @media (max-width: 330px) {
    width: 275px;
  }
`;

const CenterContainer = styled.div`
  display: flex;

  width: 900px;
  height: 550px;
  background-color: #fff;
  @media (max-width: 1380px) {
    width: 700px;
  }
  @media (max-width: 1150px) {
    width: 600px;
  }
  @media (max-width: 930px) {
    width: 500px;
  }
  @media (max-width: 815px) {
    width: 400px;
  }
  @media (max-width: 715px) {
    width: 300px;
    height: 600px;
  }
  @media (max-width: 540px) {
    width: 400px;
    height: auto;
  }
  @media (max-width: 430px) {
    width: 300px;
  }
  @media (max-width: 330px) {
    width: 275px;
  }
`;

const AdminCenterContainer = styled.div`
  width: 50%;
`;
const AdminRightContainer = styled.div`
  width: 50%;
  margin: 20px;
`;

const AdminRightWrap = styled.div`
  width: 300px;
  height: 230px;
  background-color: #e2e8f0;
`;

const AdminRightText = styled.div`
  font-size: 16px;
  color: #222;
  padding: 10px;
  padding-left: 15px;
`;

const AdminTextContainer = styled.div`
  margin: 20px;
`;
const AdminTextTitle = styled.h3`
  font-size: 20px;
  padding-bottom: 20px;
`;
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  gap: 10px;
  width: 40%;
`;

const InputContainer = styled.input`
  display: flex;
  border: 1px solid #ddd;
  border-radius: 3px;
  height: 40px;
  width: 250px;
  margin-top: 5px;
`;

const InputSubmit = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #22c55e;
  border-radius: 3px;
  height: 40px;
  width: 250px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
`;

const LabelContainer = styled.label``;
const AdressAdmin = () => {
  const user = useSelector((state) => state.user);

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
                <AdminTextTitle>Adres Dostawy</AdminTextTitle>
                <FormContainer>
                  <LabelContainer>
                    Imię i Nazwisko:
                    <InputContainer type="text" name="name" />
                  </LabelContainer>
                  <LabelContainer>
                    Adres Dostawy:
                    <InputContainer type="text" name="lastName" />
                  </LabelContainer>
                  <LabelContainer>
                    Kod Pocztowy:
                    <InputContainer type="text" name="phone" />
                  </LabelContainer>
                  <LabelContainer>
                    Miasto:
                    <InputContainer type="text" name="company" />
                  </LabelContainer>
                  <LabelContainer>
                    Numer Telefonu:
                    <InputContainer type="text" name="nip" />
                  </LabelContainer>
                  <InputSubmit type="submit" value="Zapisz" />
                </FormContainer>
              </AdminTextContainer>
            </AdminCenterContainer>
            <AdminRightContainer>
              <AdminTextTitle>Obecny Adres dostawy</AdminTextTitle>
              <AdminRightWrap>
                <AdminRightText>
                  Imię i nazwisko: {user.currentUser.name}
                </AdminRightText>
                <AdminRightText>
                  Adres Dostawy: {user.currentUser.delivery}
                </AdminRightText>
                <AdminRightText>
                  Kod pocztowy: {user.currentUser.zip}
                </AdminRightText>
                <AdminRightText>Miasto: {user.currentUser.city}</AdminRightText>
                <AdminRightText>
                  Tel. dla kuriera: {user.currentUser.phone}
                </AdminRightText>
              </AdminRightWrap>
            </AdminRightContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default AdressAdmin;
