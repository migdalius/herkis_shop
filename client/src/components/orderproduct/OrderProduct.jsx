import styled, { keyframes } from "styled-components";
import { BoxSeam } from "react-bootstrap-icons";
const Container = styled.div`
  @media (max-width: 535px) {
    width: 300px;
  }
  @media (max-width: 430px) {
    width: 160px;
  }
`;
const DeliveryStage = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 20px;
  margin: 20px;
`;
const ProductDesc = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  padding-bottom: 40px;
  margin: 20px;
`;
const ProductSum = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  margin: 20px;

  @media (max-width: 430px) {
    flex-direction: column;
    width: 100%;
  }
`;
const DeliveryTitle = styled.p`
  font-size: 14px;
  color: green;
  font-weight: 600;
`;

const ProductImage = styled.img`
  width: 60px;

  @media (max-width: 430px) {
    display: none;
  }
`;
const ProductTitle = styled.p``;
const SingleProductPrice = styled.p``;
const SingleProductSum = styled.p``;
const AllProductTitle = styled.p``;
const AllProductSum = styled.p``;
const DContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const DeliverTime = styled.p`
  font-size: 14px;

  @media (max-width: 750px) {
    margin-right: 20px;
  }
`;

const WrapButton = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  margin-bottom: 20px;
`;
const Button = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  background-color: #ef4444;
  border-radius: 5px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const IconsBoxSeam = styled(BoxSeam)`
  size: 20px;
  color: #222;

  @media (max-width: 535px) {
    display: none;
  }
`;
const OrderProduct = (item) => {
  const product = item.item;
  const items = product.products;

  return (
    <Container>
      <DContainer>
        <DeliveryStage>
          <DeliveryTitle>Zamówienie opłacone</DeliveryTitle>
          <IconsBoxSeam />
        </DeliveryStage>
        <DeliverTime>{product.createdAt.substring(0, 10)}</DeliverTime>
      </DContainer>
      {items.map((item) => {
        return (
          <ProductDesc key={item._id}>
            <ProductImage src="../img/product.png" />
            <ProductTitle>{item.productName}</ProductTitle>
            <SingleProductPrice>{item.quantity} szt</SingleProductPrice>
            <SingleProductSum>{item.productPrice} zł</SingleProductSum>
          </ProductDesc>
        );
      })}

      <ProductSum>
        <AllProductTitle>Razem z darmową dostawą</AllProductTitle>
        <AllProductSum>{product.amount} zł</AllProductSum>
      </ProductSum>
    </Container>
  );
};

export default OrderProduct;
