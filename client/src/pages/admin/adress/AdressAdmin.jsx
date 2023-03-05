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
`;

const LeftContainer = styled.div`
  width: 300px;
  height: 350px;
  background-color: #fff;
`;

const CenterContainer = styled.div`
  width: 900px;
  height: 550px;
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
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default AdressAdmin;
