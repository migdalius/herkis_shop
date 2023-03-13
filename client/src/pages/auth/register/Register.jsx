import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../redux/apiCalls";
import TopNav from "../../../components/topNav/TopNav";
import { Link } from "react-router-dom";
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
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [adress, setAdress] = useState("");
  const [zip, setZip] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
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
                  placeholder="Email"
                  type="text"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                  placeholder="Hasło"
                  type="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Input
                  placeholder="Imię i Nazwisko"
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  placeholder="Adres Dostawy"
                  type="text"
                  onChange={(e) => setAdress(e.target.value)}
                />
                <Input
                  placeholder="Kod pocztowy"
                  type="text"
                  onChange={(e) => setZip(e.target.value)}
                />
                <Input
                  placeholder="Miasto"
                  type="text"
                  onChange={(e) => setCity(e.target.value)}
                />
                <Input
                  placeholder="Numer Telefonu"
                  type="number"
                  onChange={(e) => setPhone(e.target.value)}
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
