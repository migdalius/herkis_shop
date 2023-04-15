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
`;
const DeliveryTitle = styled.p`
  font-size: 14px;
  color: green;
  font-weight: 600;
`;

const ProductImage = styled.img`
  width: 60px;
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
const OrderProduct = (item) => {
  const product = item.item;
  const items = product.products;

  return (
    <Container>
      <DContainer>
        <DeliveryStage>
          <DeliveryTitle>Subskrypcja aktywna</DeliveryTitle>
          <BoxSeam color="#222" size={20} />
        </DeliveryStage>
        <DeliverTime>{product.createdAt.substring(0, 10)}</DeliverTime>
      </DContainer>
      {items.map((item) => {
        return (
          <ProductDesc key={item._id}>
            <ProductImage src="../img/testproduct/bazylia_cytrynowa.jpg" />
            <ProductTitle>{item.productId}</ProductTitle>
            <SingleProductPrice>{item.quantity} × 24,99 zł</SingleProductPrice>
            <SingleProductSum>49,98 zł</SingleProductSum>
          </ProductDesc>
        );
      })}

      <ProductSum>
        <AllProductTitle>Razem z darmową dostawą</AllProductTitle>
        <AllProductSum>{product.amount} zł</AllProductSum>
      </ProductSum>
      <WrapButton>
        <Button>Anuluj Subskrypcje</Button>
      </WrapButton>
    </Container>
  );
};

export default OrderProduct;
