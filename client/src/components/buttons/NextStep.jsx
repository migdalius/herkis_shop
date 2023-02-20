import styled, { keyframes } from "styled-components";

const SequentialStep = styled.button`
  padding: 10px 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;

  &:hover {
    background-color: #222;
    transition: 0.3ms;
    color: #fff;
  }
`;

const PreviosStep = styled.button`
  padding: 10px 10px;
  border: 1px solid #ddd;
  background-color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #222;
    transition: 0.3ms;
    color: #fff;
  }
`;

const SectionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px;
`;
const NextStep = () => {
  return (
    <SectionContainer>
      <PreviosStep>Poprzedni krok</PreviosStep>
      <SequentialStep>Następny krok</SequentialStep>
    </SectionContainer>
  );
};

export default NextStep;
