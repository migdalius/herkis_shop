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
`;
const BackButton = styled.button`
  padding: 20px 40px;
  border: none;
  border-radius: 5px;
  background-color: #14b8a6;
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
