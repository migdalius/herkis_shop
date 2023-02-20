import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";
import Navigation from "../../../components/nav/Navigation";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../redux/apiCalls";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 90vh;
`;
const Container = styled.div`
  display: flex;

  width: 1000px;
  height: 600px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
const LeftContainer = styled.div`
  flex: 1;
  /* background-color: #14b8a6; */
  background-color: rgba(20, 184, 166, 1);
  background-image: linear-gradient(
    231deg,
    rgba(20, 184, 166, 1) 15%,
    rgba(16, 185, 129, 1) 100%
  );
  border-right: 1px solid #ddd;
  border-radius: 10px 0px 0px 10px;
`;
const RightContainer = styled.div`
  flex: 1;
`;
const BackgroundContainer = styled.div`
  width: 100vw;
  height: auto;
  background-color: #eceff1;
`;

const LeftTextContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const ContentContainer = styled.div`
  width: 500px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LeftLoginSpan = styled.span`
  font-size: 12px;
  margin-bottom: 10px;
`;
const LeftLoginTitle = styled.h2`
  font-size: 30px;
  margin-bottom: 20px;
`;
const LeftLoginDesc = styled.p``;

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

  &:disabled {
    background-color: grey;
    cursor: not-allowed;
  }
`;

const Error = styled.span`
  color: red;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="app">
      <BackgroundContainer>
        <Navigation />
        <MainContainer>
          <Container>
            <LeftContainer>
              <ContentContainer>
                <LeftTextContainer>
                  <LeftLoginSpan>Witaj ponownie!</LeftLoginSpan>
                  <LeftLoginTitle>Zaloguj się do system X</LeftLoginTitle>
                  <LeftLoginDesc>
                    Zaloguj się i zobacz swoje zakupy, obserwowane oferty i
                    powiadomienia. W X jesteś u siebie!
                  </LeftLoginDesc>
                </LeftTextContainer>
              </ContentContainer>
            </LeftContainer>
            <RightContainer>
              <ContentContainer>
                <RightTextContainer>
                  <RightLoginTitle>Logowanie użytkownika</RightLoginTitle>
                  <LoginInput
                    type="text"
                    placeholder="UserName"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  <LoginInput
                    type="password"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <LoginButton onClick={handleClick} disabled={isFetching}>
                    Zaloguj się
                  </LoginButton>

                  {error && <Error>Błędna nazwa użytkownika lub email.</Error>}
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

export default Login;
