import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../redux/apiCalls";
import TopNav from "../../../components/topNav/TopNav";
import { Link, Navigate, redirect } from "react-router-dom";
import { publicRequest, userRequest } from "../../requestMethods";

const MainContainer = styled.div`
  min-height: 100vh;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
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

const ErrorMessage = styled.span`
  color: red;
  font-size: 12px;
`;

const Register = () => {
  const [errors, setErrors] = useState({});
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
    adress: "",
    zip: "",
    city: "",
    phone: "",
  });

  const [username, setUserName] = useState(false);
  const { isFetching, error } = useSelector((state) => state.user);
  const [status, setStatus] = useState(false);

  // useEffect(() => {
  //   const getUserName = async () => {
  //     try {
  //       const res = await publicRequest.get("users/find/username/super");
  //       const data = await res.data;
  //       setUserName(data);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   getUserName();
  // }, []);

  const validateInput = () => {
    let errors = {};
    let isValid = true;

    if (!user.email) {
      errors.email = "Adres email jest wymagany";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(user.email)) {
      errors.email = "Email jest niepoprawny";
      isValid = false;
    }

    if (!user.password) {
      errors.password = "Hasło jest wymagane";
      isValid = false;
    } else if (!/(?=.*[A-Z])(?=.*[!@#$&*])(?=.{8,})/.test(user.password)) {
      errors.password =
        "Hasło musi mieć co najmniej 8 znaków, 1 dużą literę i 1 znak specjalny (!@#$&*)";
      isValid = false;
    }

    if (!user.name) {
      errors.name = "Imię i nazwisko jest wymagane";
      isValid = false;
    } else if (!/^[a-zA-Z]+\s[a-zA-Z]+$/.test(user.name)) {
      errors.name = "To nie jest Imię i Nazwisko";
      isValid = false;
    }

    if (!user.adress) {
      errors.adress = "Adres jest wymagany";
      isValid = false;
    }

    if (!user.zip || !/^\d{2}-\d{3}$/.test(user.zip)) {
      errors.zip = "Kod pocztowy jest wymagany i musi mieć format xx-xxx";
      isValid = false;
    }

    if (!user.city) {
      errors.city = "Miasto jest wymagane";
      isValid = false;
    }

    if (!user.phone) {
      errors.phone = "Numer telefonu jest wymagany";
      isValid = false;
    } else if (!/^\d{9}$/.test(user.phone)) {
      errors.phone = "Numer telefonu musi składać się z 9 cyfr";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleRegister = (e) => {
    setUser((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async () => {
    if (validateInput()) {
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
        if (err.response && err.response.status === 400) {
          setUserName(true);
        }
        console.log(err);
      }
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
                      required={true}
                      style={{ border: username && "1px solid red" }}
                    />
                    {username && (
                      <ErrorMessage>
                        Taki użytkownik lub email już istnieje
                      </ErrorMessage>
                    )}

                    <Input
                      name="email"
                      placeholder="Email"
                      type="text"
                      onChange={handleRegister}
                      required={true}
                      style={{ border: errors.email && "1px solid red" }}
                    />
                    {errors.email && (
                      <ErrorMessage>{errors.email}</ErrorMessage>
                    )}
                    <Input
                      name="password"
                      placeholder="Hasło"
                      type="password"
                      onChange={handleRegister}
                      required={true}
                      style={{ border: errors.password && "1px solid red" }}
                    />
                    {errors.password && (
                      <ErrorMessage>{errors.password}</ErrorMessage>
                    )}
                    <Input
                      name="name"
                      placeholder="Imię i Nazwisko"
                      type="text"
                      onChange={handleRegister}
                      required={true}
                      style={{ border: errors.name && "1px solid red" }}
                    />
                    <>
                      {errors.name && (
                        <ErrorMessage>{errors.name}</ErrorMessage>
                      )}
                    </>

                    <Input
                      name="adress"
                      placeholder="Adres Dostawy"
                      type="text"
                      onChange={handleRegister}
                      required={true}
                      style={{ border: errors.adress && "1px solid red" }}
                    />
                    {errors.adress && (
                      <ErrorMessage>{errors.adress}</ErrorMessage>
                    )}
                    <Input
                      name="zip"
                      placeholder="Kod pocztowy"
                      type="text"
                      onChange={handleRegister}
                      required={true}
                      style={{ border: errors.zip && "1px solid red" }}
                    />
                    {errors.zip && <ErrorMessage>{errors.zip}</ErrorMessage>}
                    <Input
                      name="city"
                      placeholder="Miasto"
                      type="text"
                      onChange={handleRegister}
                      required={true}
                      style={{ border: errors.city && "1px solid red" }}
                    />
                    {errors.city && <ErrorMessage>{errors.city}</ErrorMessage>}
                    <Input
                      name="phone"
                      placeholder="Numer Telefonu"
                      type="number"
                      onChange={handleRegister}
                      required={true}
                      style={{ border: errors.phone && "1px solid red" }}
                    />
                    {errors.phone && (
                      <ErrorMessage>{errors.phone}</ErrorMessage>
                    )}
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
