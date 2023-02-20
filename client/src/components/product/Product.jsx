import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
const ProductCard = styled.div`
  display: flex;
  margin-right: 1%;
  margin-left: 1%;
  width: 98%;
  height: 200px;
  background-color: #fff;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 10px;
`;

const ProductImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25%;
`;

const ProductDesc = styled.div`
  width: 50%;
`;
const ProductDetail = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

const Img = styled.img`
  width: 90%;
  height: 90%;
  border-radius: 10px;
`;

const ProductDescTitle = styled.h2`
  font-size: 28px;
  padding-top: 10px;
`;

const ProductDescProducer = styled.div`
  font-size: 14px;
  padding-top: 10px;
`;

const ProductDescPrice = styled.p`
  padding-top: 10px;
  font-size: 22px;
  font-weight: 700;
`;

const Ingredients = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  background-color: #f4f4f5;
  width: 300px;
  height: 70px;
  border-radius: 10px;
  border: 1px solid #ddd;
`;

const Carbohydrates = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1;
  margin: 5px;
`;

const Protein = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1;
  margin: 5px;
`;

const Fat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  flex: 1;
  margin: 5px;
`;

const ImgIcons = styled.img`
  width: 30px;
  height: 30px;
`;

const Paragraph = styled.p`
  font-size: 10px;
`;

const Procent = styled.p`
  font-weight: 700;
  font-size: 16px;
`;

const ProductDetailEat = styled.div`
  width: 100%;
  height: 65%;
  background-color: #fff;
`;

const ProdcutTitle = styled.p``;
const ProductDetailBuy = styled.div`
  width: 100%;
  height: 35%;
  background-color: #fff;
`;

const ButtonProduct = styled.button`
  width: 90%;
  margin-left: 5%;
  margin-right: 5%;
  height: 50px;
  background-color: #08284a;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
`;

const Product = () => {
  return (
    <ProductCard>
      <ProductImage>
        <Img src="https://cdn.x-kom.pl/i/setup/images/prod/big/product-new-big,,2022/2/pr_2022_2_4_14_26_35_40_00.jpg" />
      </ProductImage>
      <ProductDesc>
        <ProductDescTitle>Nazwa produktu</ProductDescTitle>
        <ProductDescProducer>(szybkauprawa sp. z o.o.)</ProductDescProducer>
        <ProductDescPrice>54zł / 100g</ProductDescPrice>
        <Ingredients>
          <Carbohydrates>
            <ImgIcons src="../img/icons/carbs.png" />
            <Paragraph>Węglowodany</Paragraph>
            <Procent>10%</Procent>
          </Carbohydrates>
          <Protein>
            <ImgIcons src="../img/icons/meat.png" />
            <Paragraph>Białko</Paragraph>
            <Procent>10%</Procent>
          </Protein>
          <Fat>
            <ImgIcons src="../img/icons/fat.png" />
            <Paragraph>Tłuszcz</Paragraph>
            <Procent>10%</Procent>
          </Fat>
        </Ingredients>
      </ProductDesc>
      <ProductDetail>
        <ProductDetailEat>
          <ProdcutTitle>Twój "Name" zje dziennie "300g" tej karmy</ProdcutTitle>
          <ImgIcons src="../img/icons/weight.png" />
        </ProductDetailEat>
        <ProductDetailBuy>
          <ButtonProduct> Dodaj do koszyka</ButtonProduct>
        </ProductDetailBuy>
      </ProductDetail>
    </ProductCard>
  );
};

export default Product;
