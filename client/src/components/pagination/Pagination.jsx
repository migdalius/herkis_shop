import styled, { keyframes } from "styled-components";
const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  gap: 40px;
`;
const Previous = styled.button`
  padding: 10px 20px;
  border: 1px solid #cccccc;
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #222;
    color: #fff;
    transition: 0.3s;
  }
`;
const Next = styled.button`
  padding: 10px 20px;
  border: 1px solid #cccccc;
  background-color: #fff;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #222;
    color: #fff;
    transition: 0.3s;
  }
`;
const Pagination = () => {
  return (
    <PaginationContainer>
      <Previous>Poprzednia</Previous>
      <Next>Następna</Next>
    </PaginationContainer>
  );
};

export default Pagination;
