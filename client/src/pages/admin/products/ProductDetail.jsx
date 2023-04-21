import * as React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import Footer from "../../../components/footer/Footer";
import OrderTable from "../../../components/orderTable/OrderTable";

import TopNav from "../../../components/topNav/TopNav";
import { userRequest } from "../../requestMethods";
import ProductTable from "../../../components/table/ProductTable";
import { useState } from "react";
import { useEffect } from "react";
// import Editors from "../../../components/editor/Editors";

const BackgroundContainer = styled.div`
  width: 100vw;
  height: calc(100vh - 70px);
  background-color: #eceff1;
`;

const MainContainer = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: auto;
  margin-left: 5%;
  margin-right: 5%;

  gap: 10px;
  padding-bottom: 60px;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    height: auto;
  }
`;

const CenterContainer = styled.div`
  width: 1600px;
  height: auto;

  background-color: #fff;
`;

const AdminCenterContainer = styled.div``;

const AdminTextContainer = styled.div`
  margin: 20px;
`;

const AdminTextTitle = styled.h2``;
const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  width: 400px;
`;

const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const Textarea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border-color: #22c55e;
  }
`;

const Select = styled.select`
  padding: 8px;
  border-radius: 4px;
  border: 1px solid #ccc;
  font-size: 16px;
  width: 400px;
`;

const Option = styled.option`
  font-size: 16px;
  width: 400px;
`;

const InputButton = styled.button`
  height: 40px;
  border: none;
  background-color: #22c55e;
  color: #fff;
  font-size: 14px;
`;
const ProductDetail = () => {
  const location = useLocation();

  const id = location.pathname.split("/")[3];
  const [selectedOption, setSelectedOption] = useState("");
  const [product, setProduct] = useState({});

  const [item, setItem] = useState({
    title: "",
    desc: "",
    price: "",
    img: "",
  });

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await userRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [id]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleProductChange = (e) => {
    setItem((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = async () => {
    try {
      const res = await userRequest.put(`products/${id}`, {
        title: product.title,
        desc: product.desc,
        price: product.price,
        img: product.img,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  const category = product.categories;

  const translate = {
    week: "Tygodniowy",
    month: "Miesięczny",
  };

  return (
    <div className="app">
      <BackgroundContainer>
        <TopNav />
        <MainContainer>
          <CenterContainer>
            <AdminCenterContainer>
              <AdminTextContainer>
                <AdminTextTitle>
                  Szczegóły produktu - {product.title}
                </AdminTextTitle>
                <FormContainer>
                  <InputContainer>
                    <Label>Tytuł Produktu:</Label>
                    <Input
                      name="title"
                      type="text"
                      defaultValue={product.title}
                      onChange={handleProductChange}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label>Opis produktu:</Label>
                    <Textarea
                      name="desc"
                      type="text"
                      defaultValue={product.desc}
                      onChange={handleProductChange}
                    />
                    {/* <Editors /> */}
                  </InputContainer>
                  <InputContainer>
                    <Label>Kategoria: obecna - {translate[category]}</Label>
                    <Select
                      value={selectedOption}
                      onChange={handleOptionChange}
                    >
                      <Option value="">-- Wybierz kategorie --</Option>
                      <Option value="month">Miesięczny</Option>
                      <Option value="week">Tygodniowy</Option>
                    </Select>
                  </InputContainer>
                  <InputContainer>
                    <Label>Cena zetawu</Label>
                    <Input
                      name="price"
                      type="number"
                      defaultValue={product.price}
                    />
                  </InputContainer>
                  <InputContainer>
                    <Label>Miniatura</Label>
                    <Input name="img" type="text" defaultValue={product.img} />
                  </InputContainer>
                  <InputContainer>
                    <InputButton onClick={handleClick} type="submit">
                      Aktualizuj produkt
                    </InputButton>
                  </InputContainer>
                </FormContainer>
              </AdminTextContainer>
            </AdminCenterContainer>
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default ProductDetail;
