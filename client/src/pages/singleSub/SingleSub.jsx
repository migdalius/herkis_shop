import React from "react";
import styled, { keyframes } from "styled-components";
import Footer from "../../components/footer/Footer";

import TopNav from "../../components/topNav/TopNav";
import { Link } from "react-router-dom";

import { Basket, Clock } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";

const MainContainer = styled.div`
  height: auto;
  background-color: #f2f2f2;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 100px;
  padding-bottom: 100px;
`;

const Container = styled.div`
  display: flex;
  width: 1200px;
  height: auto;
  background-color: #fff;
  @media (max-width: 1215px) {
    width: 900px;
  }
  @media (max-width: 915px) {
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
    width: 350px;
  }
  @media (max-width: 360px) {
    width: 300px;
  }
`;

const Wrap = styled.div`
  margin: 50px;
  width: 100%;
`;

const TextContainer = styled.div`
  height: auto;
`;
const TitleSection = styled.h2`
  font-size: 32px;
  margin-top: 40px;
`;
const TextWrap = styled.div`
  display: flex;
  @media (max-width: 915px) {
    flex-direction: column-reverse;
  }
`;
const ImgWrap = styled.div`
  width: 50%;
  @media (max-width: 915px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
`;
const DescWrap = styled.div`
  margin: 10px;
  width: 50%;
  @media (max-width: 915px) {
    width: 100%;
  }
`;
const Desc = styled.p``;

const FinalPrice = styled.h2`
  padding-top: 36px;
  font-weight: 700;
  color: green;
`;

const List = styled.ul`
  margin: 20px;
`;
const ListItem = styled.li`
  padding-top: 10px;
`;

const SubTitle = styled.h3`
  margin-top: 20px;
`;

const Button = styled.button`
  width: 300px;
  height: 60px;
  border: none;
  border-radius: 5px;
  background-color: #ef4444;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`;

const SubDesc = styled.p`
  margin-top: 20px;
  margin-bottom: 20px;
`;

const SingleSub = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await publicRequest.get(`/products/find/${id}`);
        setProduct(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [id]);

  const handleQuantity = (type) => {
    if (type === "dec") {
      quantity > 1 && setQuantity(quantity - 1);
    } else {
      setQuantity(quantity + 1);
    }
  };

  const handleClick = () => {
    //update cart
    dispatch(
      addProduct({
        ...product,
        quantity,
      })
    );
  };

  return (
    <>
      <TopNav />
      <MainContainer>
        <Container>
          <Wrap>
            <TextContainer>
              <TitleSection>{product.title}</TitleSection>
              <TextWrap>
                <DescWrap>
                  <FinalPrice>Cena: {product.price} z??</FinalPrice>
                  <SubTitle>Sk??ad zestawu do uprawy:</SubTitle>
                  <List>
                    <ListItem>1x Doniczka do uprawy 13 cm</ListItem>
                    <ListItem>
                      1L Pod??o??e organiczne z nawozem i perlitem
                    </ListItem>
                    <ListItem>
                      1op. Nasion z obecnego tygodnia (na dwa wysiania)
                    </ListItem>
                    <ListItem>
                      1op. Pa??eczki nawozowe na ca??y cykl rozwoju
                    </ListItem>
                    <ListItem>1op. Keramzyt - drena?? na sp??d doniczki</ListItem>
                    <ListItem>
                      1op. Hydro??el - przechowuje nadmiar wody w doniczce
                    </ListItem>
                  </List>
                  <SubTitle>P??atno????i</SubTitle>
                  <SubDesc>
                    Je??eli wybierzesz form?? p??atno??ci kart??, mo??esz anulowa??
                    subskrypcje w ka??dym momencie, natomiast zam??wienia op??acone
                    z g??ry za ca??y okres b??d?? realizowane wed??ug planu i
                    niestety nie ma mo??liwo??ci p????niejszej anulacji takiego
                    zam??wienia.
                  </SubDesc>
                  <Desc>
                    <Button onClick={handleClick}>Dodaj do koszyka</Button>
                  </Desc>
                </DescWrap>
                <ImgWrap>
                  <Img src="../img/product.png" />
                </ImgWrap>
              </TextWrap>
            </TextContainer>
          </Wrap>
        </Container>
      </MainContainer>
      <Footer />
    </>
  );
};

export default SingleSub;
