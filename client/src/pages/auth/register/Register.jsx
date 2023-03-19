import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../redux/apiCalls";
import TopNav from "../../../components/topNav/TopNav";
import { Link, Navigate } from "react-router-dom";
import { userRequest } from "../../requestMethods";

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

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    isAdmin: false,
  });

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleRegister = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const res = await userRequest.post("auth/register", user);
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  // change reducer to register, changes user model in api!!!

  return (
    <>
      <TopNav />
      <MainContainer>
        <Container>
          <Wrap>
            <Title>Rejestracja</Title>
            <FormWraper>
              <Form>
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
          </Wrap>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Register;
