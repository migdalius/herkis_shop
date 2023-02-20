import styled, { keyframes } from "styled-components";
import { BoxSeam } from "react-bootstrap-icons";
const Container = styled.div``;
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
const OrderProduct = () => {
  return (
    <Container>
      <DContainer>
        <DeliveryStage>
          <DeliveryTitle>Przesyłka odebrana</DeliveryTitle>
          <BoxSeam color="#222" size={20} />
        </DeliveryStage>
        <DeliverTime>15 sie 2022, 14:20</DeliverTime>
      </DContainer>
      <ProductDesc>
        <ProductImage src="../img/testproduct/bazylia_cytrynowa.jpg" />
        <ProductTitle>
          PAPIER KSERO A4 500 KARTEK DO DRUKARKI BIAŁY 80g
        </ProductTitle>
        <SingleProductPrice>2 × 24,99 zł</SingleProductPrice>
        <SingleProductSum>49,98 zł</SingleProductSum>
      </ProductDesc>
      <ProductSum>
        <AllProductTitle>Razem z darmową dostawą</AllProductTitle>
        <AllProductSum>49,98 zł</AllProductSum>
      </ProductSum>
    </Container>
  );
};

export default OrderProduct;
