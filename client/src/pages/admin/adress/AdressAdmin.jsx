import { useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import AdminSidebar from "../../../components/adminsidebar/AdminSidebar";
import Footer from "../../../components/footer/Footer";
import TopNav from "../../../components/topNav/TopNav";
import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";

const BackgroundContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  height: auto;
  background-color: #eceff1;
`;

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: auto;
  min-height: 100vh;

  margin-left: 5%;
  margin-right: 5%;
  margin-top: 50px;
  gap: 10px;
  padding-bottom: 60px;
  @media (max-width: 540px) {
    flex-direction: column-reverse;
    height: auto;
    gap: 30px;
  }
`;

const LeftContainer = styled.div`
  width: 300px;
  height: 400px;
  background-color: #fff;
  @media (max-width: 1150px) {
    width: 200px;
  }
  @media (max-width: 600px) {
    width: 150px;
    height: 450px;
  }
  @media (max-width: 540px) {
    width: 400px;
  }
  @media (max-width: 430px) {
    width: 300px;
  }
  @media (max-width: 330px) {
    width: 275px;
  }
`;

const CenterContainer = styled.div`
  display: flex;

  width: 900px;
  height: 550px;

  background-color: #fff;
  @media (max-width: 1380px) {
    width: 700px;
  }
  @media (max-width: 1150px) {
    width: 600px;
    height: 600px;
  }
  @media (max-width: 930px) {
    width: 500px;
    flex-direction: column;
    height: auto;
  }
  @media (max-width: 815px) {
    width: 400px;
  }
  @media (max-width: 715px) {
    width: 300px;
    height: auto;
  }
  @media (max-width: 540px) {
    width: 400px;
    height: auto;
  }
  @media (max-width: 430px) {
    width: 300px;
  }
  @media (max-width: 330px) {
    width: 275px;
  }
`;

const AdminCenterContainer = styled.div`
  width: 50%;
`;
const AdminRightContainer = styled.div`
  width: 50%;
  margin: 20px;
`;

const AdminRightWrap = styled.div`
  min-width: 300px;
  height: 230px;
  background-color: #e2e8f0;
  @media (max-width: 1150px) {
    min-width: 200px;
  }

  @media (max-width: 930px) {
    width: 400px;
  }
  @media (max-width: 930px) {
    width: 300px;
  }
  @media (max-width: 715px) {
    width: 250px;
  }
`;

const AdminRightText = styled.div`
  font-size: 16px;
  color: #222;
  padding: 10px;
  padding-left: 15px;
`;

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
  margin-top: 5px;
  padding: 10px;
  @media (max-width: 930px) {
    width: 400px;
  }
  @media (max-width: 930px) {
    width: 300px;
  }
  @media (max-width: 715px) {
    width: 250px;
  }
`;

const InputSubmit = styled.input`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background-color: #22c55e;
  border-radius: 3px;
  height: 40px;
  width: 250px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;

  @media (max-width: 930px) {
    width: 400px;
  }
  @media (max-width: 930px) {
    width: 300px;
  }
  @media (max-width: 715px) {
    width: 250px;
  }
`;

const LabelContainer = styled.label``;
const AdressAdmin = () => {
  const user = useSelector((state) => state.user);
  const [person, setPerson] = useState("");
  console.log(person);
  const [formData, setFormData] = useState({
    name: user.currentUser.name,
    delivery: user.currentUser.delivery,
    zip: user.currentUser.zip,
    city: user.currentUser.city,
    phone: user.currentUser.phone,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await userRequest.put(
        `/users/${user.currentUser._id}`,
        formData
      );
      const updatedUser = await res.data;
      setPerson(updatedUser);
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <div className="app">
      <BackgroundContainer>
        <TopNav />
        <MainContainer>
          <LeftContainer>
            <AdminSidebar />
          </LeftContainer>
          <CenterContainer>
            <AdminCenterContainer>
              <AdminTextContainer>
                <AdminTextTitle>Adres Dostawy</AdminTextTitle>
                <FormContainer onSubmit={handleSubmit}>
                  <LabelContainer>
                    Imię i Nazwisko:
                    <InputContainer
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </LabelContainer>
                  <LabelContainer>
                    Adres Dostawy:
                    <InputContainer
                      type="text"
                      name="delivery"
                      onChange={handleChange}
                      value={formData.delivery}
                    />
                  </LabelContainer>
                  <LabelContainer>
                    Kod Pocztowy:
                    <InputContainer
                      type="text"
                      name="zip"
                      value={formData.zip}
                      onChange={handleChange}
                    />
                  </LabelContainer>
                  <LabelContainer>
                    Miasto:
                    <InputContainer
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </LabelContainer>
                  <LabelContainer>
                    Numer Telefonu:
                    <InputContainer
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </LabelContainer>
                  <InputSubmit type="submit" value="Zapisz" />
                </FormContainer>
              </AdminTextContainer>
            </AdminCenterContainer>
            {person && (
              <AdminRightContainer>
                <AdminTextTitle>Twoje nowe dane</AdminTextTitle>
                <AdminRightWrap>
                  <AdminRightText>
                    Imię i nazwisko: {person.name}
                  </AdminRightText>
                  <AdminRightText>
                    Adres Dostawy:{person.delivery}
                  </AdminRightText>
                  <AdminRightText>Kod pocztowy: {person.zip}</AdminRightText>
                  <AdminRightText>Miasto: {person.city} </AdminRightText>
                  <AdminRightText>
                    Tel. dla kuriera: {person.phone}
                  </AdminRightText>
                </AdminRightWrap>
              </AdminRightContainer>
            )}
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default AdressAdmin;
