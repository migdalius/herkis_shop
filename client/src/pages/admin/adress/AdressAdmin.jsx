import styled, { keyframes } from "styled-components";
import AdminSidebar from "../../../components/adminsidebar/AdminSidebar";
import Footer from "../../../components/footer/Footer";
import Navigation from "../../../components/nav/Navigation";

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
  height: 800px;
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
`;

const InputSubmit = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #14b8a6;
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
        <Navigation />
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
                    *Imię:
                    <InputContainer type="text" name="name" />
                  </LabelContainer>
                  <LabelContainer>
                    *Nazwisko:
                    <InputContainer type="text" name="lastName" />
                  </LabelContainer>
                  <LabelContainer>
                    *Telefon:
                    <InputContainer type="text" name="phone" />
                  </LabelContainer>
                  <LabelContainer>
                    Nazwa firmy:
                    <InputContainer type="text" name="company" />
                  </LabelContainer>
                  <LabelContainer>
                    NIP:
                    <InputContainer type="text" name="nip" />
                  </LabelContainer>
                  <LabelContainer>
                    *Ulica i nr domu:
                    <InputContainer type="text" name="street" />
                  </LabelContainer>
                  <LabelContainer>
                    *Kod pocztowy:
                    <InputContainer type="text" name="zip" />
                  </LabelContainer>
                  <LabelContainer>
                    *Miasto:
                    <InputContainer type="text" name="city" />
                  </LabelContainer>
                  <LabelContainer>
                    Kraj:
                    <InputContainer type="text" name="country" />
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
