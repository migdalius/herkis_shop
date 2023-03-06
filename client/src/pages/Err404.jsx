import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  width: 100vw;
  height: 90vh;
`;

const ErrTitle = styled.h1`
  font-size: 36px;
`;
const ErrDesc = styled.p`
  font-size: 16px;
  @media (max-width: 545px) {
    width: 300px;
  }
  @media (max-width: 410px) {
    width: 200px;
  }
`;
const BackButton = styled.button`
  padding: 20px 40px;
  border: none;
  border-radius: 5px;
  background-color: #22c55e;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;
const Err404 = () => {
  return (
    <div className="app">
      <MainContainer>
        <ErrTitle>Błąd 404</ErrTitle>
        <ErrDesc>
          Strona, której szukasz, nie istnieje lub została przeniesiona w inne
          miejsce.
        </ErrDesc>
        <Link to={"/"}>
          <BackButton>Wracam na stronę główną</BackButton>
        </Link>
      </MainContainer>
    </div>
  );
};

export default Err404;
