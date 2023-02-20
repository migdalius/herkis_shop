import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  width: 80%;
  height: 50px;
  border: none;
  background-color: #08284a;
  color: #f9fafb;
  font-size: 18px;
  border-radius: 5px;
  cursor: pointer;
`;

const NextButton = () => {
  return (
    <Button>
      Następny krok
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-arrow-right"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
        />
      </svg>
    </Button>
  );
};

export default NextButton;
