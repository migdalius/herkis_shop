import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";
import Navigation from "../../../components/nav/Navigation";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;
const Container = styled.div`
  display: flex;

  width: 500px;
  height: 600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const RightContainer = styled.div`
  flex: 1;
`;
const BackgroundContainer = styled.div`
  width: 100vw;
  height: auto;
  background-color: #eceff1;
`;

const ContentContainer = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const RightTextContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #222;
`;
const RightLoginTitle = styled.h3`
  margin-bottom: 30px;
  color: #14b8a6;
`;
const LoginInput = styled.input`
  border: 1px solid #ddd;
  width: 210px;
  height: 30px;
  background-color: #f1f5f9;
  border-left: 3px solid #14b8a6;
  margin-bottom: 20px;
  padding: 5px;
`;
const LoginButton = styled.button`
  padding: 10px 70px;
  border-radius: 5px;
  border: none;
  background-color: #14b8a6;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

const RegLabel = styled.label`
  display: flex;
  gap: 10px;
  font-size: 12px;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const RegInput = styled.input``;
const Register = () => {
  return (
    <div className="app">
      <BackgroundContainer>
        <Navigation />
        <MainContainer>
          <Container>
            <RightContainer>
              <ContentContainer>
                <RightTextContainer>
                  <RightLoginTitle>Rejestracja Użytkownika</RightLoginTitle>
                  <GridContainer>
                    <LoginInput type="text" placeholder="Imię" />
                    <LoginInput type="text" placeholder="Nazwisko" />
                    <LoginInput
                      type="text"
                      placeholder="Ulica i number mieszkania"
                    />
                    <LoginInput type="text" placeholder="Kod pocztowy" />
                    <LoginInput type="text" placeholder="Miasto" />
                    <LoginInput type="text" placeholder="Telefon" />
                    <LoginInput type="text" placeholder="Adres email" />
                    <LoginInput type="password" placeholder="Password" />
                  </GridContainer>
                  <RegLabel>
                    <RegInput
                      type="radio"
                      name="test1"
                      value="test1"
                      id="test1"
                    />
                    *Akceptuję warunki regulaminu. Zgadzam się na otrzymywanie
                    informacji dotyczących zamówień w myśl ustawy z dnia 18
                    lipca 2002r. o świadczeniu usług drogą elektroniczną.
                  </RegLabel>

                  <LoginButton>Zarejestruj konto</LoginButton>
                </RightTextContainer>
              </ContentContainer>
            </RightContainer>
          </Container>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default Register;
