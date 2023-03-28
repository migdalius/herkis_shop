import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../redux/apiCalls";
import TopNav from "../../../components/topNav/TopNav";
import { Link, Navigate, redirect } from "react-router-dom";
import { publicRequest, userRequest } from "../../requestMethods";

const MainContainer = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div`
  width: 500px;
  height: auto;
  background-color: #fff;
  @media (max-width: 510px) {
    width: 400px;
  }
  @media (max-width: 410px) {
    width: 300px;
  }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 60px;
`;
const Title = styled.h3`
  font-size: 32px;
`;
const FormWraper = styled.div``;
const Form = styled.form``;
const Input = styled.input`
  margin-top: 20px;
  width: 350px;
  height: 50px;
  border: 1px solid #bfbfbf;
  border-radius: 5px;
  padding: 10px;
  @media (max-width: 510px) {
    width: 300px;
  }
  @media (max-width: 410px) {
    width: 200px;
  }
`;

const AgreeTerms = styled.p`
  font-size: 12px;
  margin: 20px;
`;

const Button = styled.button`
  width: 350px;
  height: 50px;
  border: none;
  background-color: #22c55e;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #222;
  }
  @media (max-width: 510px) {
    width: 300px;
  }
  @media (max-width: 410px) {
    width: 200px;
  }
`;

const RegisterContainer = styled.div`
  display: flex;
  align-items: center;
`;

const RegWraper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

const RegText = styled.h3``;

const RegDesc = styled.p``;

const RegButton = styled.button`
  width: 350px;
  height: 50px;
  border: none;
  background-color: #22c55e;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #222;
  }
`;

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    adress: "",
    zip: "",
    city: "",
    phone: "",
  });

  const { isFetching, error } = useSelector((state) => state.user);
  const [status, setStatus] = useState(false);
  console.log(status);
  const handleRegister = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async () => {
    try {
      const res = await publicRequest.post("auth/register", {
        username: user.username,
        email: user.email,
        password: user.password,
        city: user.city,
        delivery: user.adress,
        name: user.name,
        phone: user.phone,
        zip: user.zip,
      });
      if (res.status === 201) {
        setStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <TopNav />
      <MainContainer>
        <Container>
          <Wrap>
            {!status ? (
              <>
                <Title>Rejestracja</Title>
                <FormWraper>
                  <Form>
                    <Input
                      name="username"
                      placeholder="Nazwa użytkownika"
                      type="text"
                      onChange={handleRegister}
                    />
                    <Input
                      name="email"
                      placeholder="Email"
                      type="text"
                      onChange={handleRegister}
                    />
                    <Input
                      name="password"
                      placeholder="Hasło"
                      type="password"
                      onChange={handleRegister}
                    />
                    <Input
                      name="name"
                      placeholder="Imię i Nazwisko"
                      type="text"
                      onChange={handleRegister}
                    />
                    <Input
                      name="adress"
                      placeholder="Adres Dostawy"
                      type="text"
                      onChange={handleRegister}
                    />
                    <Input
                      name="zip"
                      placeholder="Kod pocztowy"
                      type="text"
                      onChange={handleRegister}
                    />
                    <Input
                      name="city"
                      placeholder="Miasto"
                      type="text"
                      onChange={handleRegister}
                    />
                    <Input
                      name="phone"
                      placeholder="Numer Telefonu"
                      type="number"
                      onChange={handleRegister}
                    />
                  </Form>
                </FormWraper>
                <AgreeTerms>
                  Klikając „Zarejestruj się”, wyrażasz zgodę na nasze Warunki i
                  Politykę prywatności.
                </AgreeTerms>
                <Button onClick={handleClick} disabled={isFetching}>
                  Zarejestruj się
                </Button>
                <RegisterContainer>
                  <AgreeTerms>Masz już konto?</AgreeTerms>
                  <Link to={"/logowanie"}>Logowanie</Link>
                </RegisterContainer>
              </>
            ) : (
              <RegWraper>
                <RegText>Dziękujemy za rejestracje</RegText>
                <RegDesc>Teraz możesz się zalogować do swojego konta</RegDesc>
                <Link to={"/logowanie"}>
                  <RegButton>Logowanie</RegButton>
                </Link>
              </RegWraper>
            )}
          </Wrap>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Register;
