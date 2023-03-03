import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../redux/apiCalls";
import TopNav from "../../../components/topNav/TopNav";
import { Link } from "react-router-dom";

const Register = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching, error } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  const MainContainer = styled.div`
    height: calc(100vh - 150px);
    background-color: #f2f2f2;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Container = styled.div`
    width: 500px;
    height: 500px;
    background-color: #fff;
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
  `;

  const RegisterContainer = styled.div`
    display: flex;
    align-items: center;
  `;

  return (
    <>
      <TopNav />
      <MainContainer>
        <Container>
          <Wrap>
            <Title>Zaloguj się</Title>
            <FormWraper>
              <Form>
                <Input placeholder="Email" />
                <Input placeholder="Hasło" />
              </Form>
            </FormWraper>
            <AgreeTerms>
              Klikając „Zarejestruj się”, wyrażasz zgodę na nasze Warunki i
              Politykę prywatności.
            </AgreeTerms>
            <Button>Zaloguj się</Button>
            <RegisterContainer>
              <AgreeTerms>Nie masz jeszcze konta?</AgreeTerms>
              <Link to={"/"}>Rejestracja</Link>
            </RegisterContainer>
          </Wrap>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Register;
