import styled, { keyframes } from "styled-components";
import Footer from "../../components/footer/Footer";
import Navigation from "../../components/nav/Navigation";
import { Dash, ExclamationCircle, Plus } from "react-bootstrap-icons";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { publicRequest } from "../requestMethods";
import { addProduct } from "../../redux/cartRedux";
import { useDispatch } from "react-redux";
import { Basket3, PersonCircle, Search } from "react-bootstrap-icons";

const MainContainer = styled.div`
  background-color: #eceff1;
  width: 100vw;
  height: auto;
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const Content = styled.div`
  display: flex;
  width: 1200px;
  height: auto;
  gap: 20px;
`;

const Filter = styled.div`
  width: 30%;
  height: 700px;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ddd;
`;

const Products = styled.div`
  width: 70%;
  height: auto;
  background-color: #fff;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  padding: 20px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
const ImageTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  padding-top: 20px;
`;

const ImageSlider = styled.img`
  width: 500px;
  height: 500px;
  object-fit: scale-down;
  margin: 10px;
`;

const ImageSliderContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
`;
const SingleImageSlider = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid #ddd;
  border-radius: 5px;
  object-fit: scale-down;
  padding: 5px;
  cursor: pointer;
`;

const Line = styled.hr`
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  border: none;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const ProducerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px;
`;

const ProducerName = styled.h3`
  font-size: 20px;
  font-weight: 700;
`;

const ProducerLogo = styled.img`
  width: 90px;
  height: 75px;
  border: 1px solid #ddd;
  border-radius: 5px;
  object-fit: scale-down;
`;

const PriceContainer = styled.div`
  margin: 15px;
`;
const PriceContainerTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 20px;
`;

const Price = styled.h3`
  font-size: 24px;
  color: #222;
  margin-bottom: 5px;
`;

const NetPrice = styled.p`
  font-size: 12px;
`;

const DevileryTime = styled.p`
  font-size: 16px;
  margin: 15px;
`;

const DeliveryContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CompositionContainer = styled.div`
  margin: 15px;
`;

const CompositionTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const CompositionList = styled.ul``;

const CompositionListItem = styled.li`
  margin-bottom: 3px;
  list-style: none;
`;

const SummaryContainer = styled.div``;

const QuantityContainer = styled.div`
  display: flex;
  margin: 15px;
`;

const QuantityInput = styled.button`
  width: 40px;
  height: 35px;
  border: 1px solid #ddd;
  cursor: pointer;
`;

const InputQuantity = styled.input`
  width: 40px;
  height: 35px;
  border: 1px solid #ddd;

  text-align: center;
`;

const SummaryButton = styled.button`
  background-color: #14b8a6;
  margin-left: 5%;
  margin-right: 5%;
  width: 90%;
  height: 45px;
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #222;
    transition: 0.3s;
    color: #fff;
  }
`;

const Desc = styled.p`
  margin: 15px;
`;

const Composition = styled.p`
  margin-bottom: 20px;
  margin: 15px;
`;
const SingleProduct = () => {
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
      <Navigation />
      <MainContainer>
        <Content>
          <Products>
            <ImageContainer>
              <ImageSlider src={product?.img} />
            </ImageContainer>
            <ImageSliderContainer>
              <SingleImageSlider src="../img/testproduct/bazylia_cytrynowa.jpg" />
              <SingleImageSlider src="../img/testproduct/bazylia_cytrynowa.jpg" />
              <SingleImageSlider src="../img/testproduct/bazylia_cytrynowa.jpg" />
              <SingleImageSlider src="../img/testproduct/bazylia_cytrynowa.jpg" />
            </ImageSliderContainer>
            <Line />
            <ImageContainer>
              <ImageTitle>{product.title}</ImageTitle>
              <Desc>{product.desc}</Desc>
              <Composition>
                <strong>Sprawdzone nasiona:</strong> oferowane nasiona są
                testowane przez firmę TORAF w laboratorium pod względem
                zdolności kiełkowania oraz ogólnej jakości nasion czystość
                nasion oraz ich wilgotność procedury testów zgodne z ISTA
                (Międzynarodowy Związek Oceny Nasion)
              </Composition>
            </ImageContainer>
          </Products>

          <Filter>
            <ProducerContainer>
              <ProducerName>Toraf</ProducerName>
              <ProducerLogo src="../img/products/logo.jpg" />
            </ProducerContainer>
            <Line />
            <PriceContainer>
              <PriceContainerTitle>{product.title}</PriceContainerTitle>
              <Price>{product.price} zł</Price>
              <NetPrice>
                {(product.price / 1.23).toFixed(2)} zł netto, 8% VAT
              </NetPrice>
            </PriceContainer>
            <Line />
            <DeliveryContainer>
              <DevileryTime>Dostawa od 2 do 4 dni</DevileryTime>
              <ExclamationCircle color="#000" size={18} />
            </DeliveryContainer>
            <Line />
            <CompositionContainer>
              <CompositionTitle>Parametry</CompositionTitle>
              <CompositionList>
                <CompositionListItem>
                  Odmiana: Bazylia Właściwa
                </CompositionListItem>
                <CompositionListItem>Waga: 1g</CompositionListItem>
                <CompositionListItem>Wysiew: III-IV</CompositionListItem>
                <CompositionListItem>
                  Rodzaj uprawy: Uprawa domowa, Uprawa w ogrodzie
                </CompositionListItem>
              </CompositionList>
            </CompositionContainer>
            <Line />
            <SummaryContainer>
              <QuantityContainer>
                {/* <QuantityInput
                  placeholder="+"
                  onClick={() => handleQuantity("inc")}
                /> */}
                <QuantityInput onClick={() => handleQuantity("dec")}>
                  <Dash color="#222" size={20} />
                </QuantityInput>
                <InputQuantity value={quantity} />
                <QuantityInput onClick={() => handleQuantity("inc")}>
                  <Plus color="#222" size={20} />
                </QuantityInput>
              </QuantityContainer>
              <SummaryButton onClick={handleClick}>
                DODAJ DO KOSZYKA
              </SummaryButton>
            </SummaryContainer>
          </Filter>
        </Content>
      </MainContainer>
      <Footer />
    </>
  );
};

export default SingleProduct;
