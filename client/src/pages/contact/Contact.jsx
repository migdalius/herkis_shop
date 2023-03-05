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
`;

const FormContainer = styled.div`
  display: flex;
  width: 1000px;
`;

const Wrap = styled.div`
  width: 50%;
`;

const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 10px 0px 0px 10px;
`;

const Title = styled.h3`
  font-size: 28px;
  margin-top: 40px;
`;
const Desc = styled.p`
  padding-top: 15px;
  width: 350px;
  font-size: 16px;
`;
const FormText = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  margin: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
`;
const Input = styled.input`
  width: 350px;
  height: 40px;
  border-radius: 5px;
  border: 1px solid #ddd;
  padding: 10px;

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
`;
const Label = styled.label`
  color: #6b7284;
  margin-top: 15px;
  width: 350px;
  height: 40px;
  border-radius: 5px;
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
