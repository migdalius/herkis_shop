import styled, { keyframes } from "styled-components";
import Footer from "../../components/footer/Footer";

import TopNav from "../../components/topNav/TopNav";
import { Link } from "react-router-dom";

import { Basket, Clock } from "react-bootstrap-icons";

const MainContainer = styled.div`
  height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Container = styled.div`
  display: flex;
  width: 1000px;
  height: 700px;
  background-color: #fff;
  border-radius: 10px 0px 0px 10px;
  @media (max-width: 1015px) {
    width: 800px;
  }
  @media (max-width: 815px) {
    width: 700px;
  }
  @media (max-width: 715px) {
    width: 600px;
  }
  @media (max-width: 615px) {
    width: 500px;
  }
  @media (max-width: 515px) {
    width: 400px;
  }
  @media (max-width: 415px) {
    width: 300px;
  }
`;

const FormContainer = styled.div`
  display: flex;
  width: 1000px;
  @media (max-width: 615px) {
    width: 600px;
  }
  @media (max-width: 515px) {
    width: 390px;
  }
  @media (max-width: 415px) {
    width: 290px;
  }
`;

const Wrap = styled.div`
  width: 50%;
  @media (max-width: 615px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 0px 0px 10px;
  @media (max-width: 615px) {
    display: none;
  }
`;

const Title = styled.h3`
  font-size: 28px;
  margin-top: 40px;
`;
const Desc = styled.p`
  padding-top: 15px;
  width: 350px;
  font-size: 16px;
  @media (max-width: 815px) {
    width: 300px;
  }
  @media (max-width: 715px) {
    width: 250px;
  }
  @media (max-width: 615px) {
    width: 400px;
    margin: 10px;
  }
  @media (max-width: 515px) {
    width: 350px;
  }
  @media (max-width: 415px) {
    width: 270px;
  }
`;
const FormText = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  margin: 20px;
  @media (max-width: 615px) {
    margin: 0;
  }
  @media (max-width: 515px) {
    margin-left: 15px;
  }
  @media (max-width: 415px) {
    margin-left: 0px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  @media (max-width: 415px) {
    width: 270px;
  }
`;
const Input = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 10px;
  @media (max-width: 815px) {
    width: 300px;
    margin-left: 10px;
  }
  @media (max-width: 715px) {
    width: 250px;
  }
  @media (max-width: 615px) {
    width: 400px;
  }
  @media (max-width: 515px) {
    width: 350px;
  }
  @media (max-width: 415px) {
    width: 270px;
  }

  &:focus {
    outline: none !important;
    border-color: #22c55e;
  }
`;

const Textarea = styled.textarea`
  border: 1px solid #ddd;
  margin-top: 10px;
  width: 350px;
  height: 140px;
  border-radius: 5px;
  &:focus {
    outline: none !important;
    border-color: #22c55e;
  }
  padding: 10px;
  @media (max-width: 815px) {
    width: 300px;
    margin-left: 10px;
  }
  @media (max-width: 715px) {
    width: 250px;
  }
  @media (max-width: 615px) {
    width: 400px;
  }
  @media (max-width: 515px) {
    width: 350px;
  }
  @media (max-width: 415px) {
    width: 270px;
  }
`;
const Label = styled.label`
  color: #6b7284;
  margin-top: 15px;
  width: 350px;
  height: 40px;
  border-radius: 5px;
  @media (max-width: 815px) {
    width: 300px;
    margin-left: 10px;
  }
`;

const Button = styled.button`
  height: 50px;
  background-color: #22c55e;
  border: none;
  color: #fff;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;

  &:hover {
    background-color: #222;
  }
  @media (max-width: 815px) {
    width: 300px;
    margin-left: 10px;
  }
  @media (max-width: 715px) {
    width: 250px;
  }
  @media (max-width: 615px) {
    width: 400px;
  }
  @media (max-width: 515px) {
    width: 350px;
  }
  @media (max-width: 415px) {
    width: 270px;
  }
`;
const Contact = () => {
  return (
    <>
      <TopNav />
      <MainContainer>
        <Container>
          <FormContainer>
            <Wrap>
              <Img src="../img/contact-form.jpg" />
            </Wrap>
            <Wrap>
              <FormText>
                <Title>Napisz do nas</Title>
                <Desc>
                  Masz problem z uprawą lub subskrypcją, napisz do nas chętnie
                  pomożemy
                </Desc>
                <Form>
                  <Label>Twoj Adres Email</Label>
                  <Input />
                  <Label>Jaki masz problem?</Label>
                  <Input />
                  <Label>Szczegóły problemu</Label>
                  <Textarea />
                  <Button>Wyślij Zapytanie</Button>
                </Form>
              </FormText>
            </Wrap>
          </FormContainer>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default Contact;
