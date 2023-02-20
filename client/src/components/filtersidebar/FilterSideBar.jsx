import "../filtersidebar/filterSideBar.css";
import styled, { keyframes } from "styled-components";
const FilterContainer = styled.div`
  margin: 20px;
`;
const TypeOfCare = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
`;
const TypeOfCareTitle = styled.div`
  margin-bottom: 20px;
  margin-top: 20px;
  font-size: 14px;
  font-weight: 500;
`;
const TypeOfCareBody = styled.div``;

const FilterSideBar = () => {
  return (
    <FilterContainer>
      <TypeOfCare>
        <TypeOfCareTitle>Kiełkowanie</TypeOfCareTitle>
        <TypeOfCareBody>
          <label class="form-control">
            <input type="radio" name="homeGrow" />
            od 2 do 10 dni
          </label>

          <label class="form-control">
            <input type="radio" name="gardenGrow" />
            od 11 do 30 dni
          </label>
          <label class="form-control">
            <input type="radio" name="hydroGrow" />
            od 31 do 50 dni
          </label>
          <label class="form-control">
            <input type="radio" name="glassGrow" />
            powyżej 50 dni
          </label>
        </TypeOfCareBody>
        <TypeOfCareTitle>Rodzaj Doniczki</TypeOfCareTitle>
        <TypeOfCareBody>
          <label class="form-control">
            <input type="radio" name="radio" />
            Osłonka (bez otworów)
          </label>

          <label class="form-control">
            <input type="radio" name="radio" />
            Doniczka (z otworami)
          </label>
        </TypeOfCareBody>
        <TypeOfCareTitle>Typ Doniczki/Osłonki</TypeOfCareTitle>
        <TypeOfCareBody>
          <label class="form-control">
            <input type="radio" name="radio" />
            Tworzywo Sztuczne
          </label>

          <label class="form-control">
            <input type="radio" name="radio" />
            Ceramiczna
          </label>
          <label class="form-control">
            <input type="radio" name="radio" />
            Gliniana
          </label>
          <label class="form-control">
            <input type="radio" name="radio" />
            Metalowa
          </label>
        </TypeOfCareBody>
        <TypeOfCareTitle>Typ Nawozu</TypeOfCareTitle>
        <TypeOfCareBody>
          <label class="form-control">
            <input type="radio" name="radio" />
            Organiczny
          </label>

          <label class="form-control">
            <input type="radio" name="radio" />
            Mineralny
          </label>
        </TypeOfCareBody>
      </TypeOfCare>
    </FilterContainer>
  );
};

export default FilterSideBar;
