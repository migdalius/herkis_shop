import "../nav/navigation.css";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Basket3, PersonCircle, Search } from "react-bootstrap-icons";
import DropDown from "../dropdown/DropDown";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { querySearch } from "../../redux/searchRedux";

const MainContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  background-color: #0d9488;
  height: 100px;
  color: #fff;
  border-bottom: 1px solid #ddd;
`;

const SearchSection = styled.div`
  width: 650px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 5px;

  @media (max-width: 985px) {
    width: 550px;
  }

  @media (max-width: 890px) {
    width: 450px;
  }

  @media (max-width: 790px) {
    width: 350px;
  }
  @media (max-width: 690px) {
    width: 280px;
  }

  @media (max-width: 525px) {
    width: 240px;
  }

  @media (max-width: 480px) {
    width: 220px;
  }
`;

const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const UserDetail = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
  overflow: hidden;
`;

const CategoryContainer = styled.div`
  display: flex;
  justify-content: center;

  height: 45px;
  width: 100%;
  border-bottom: 1px solid #ddd;
  background-color: #f3f4f6;
`;

const CategoryList = styled.ul`
  width: 40%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  @media (max-width: 1030px) {
    width: 50%;
  }
  @media (max-width: 880px) {
    width: 60%;
  }
  @media (max-width: 710px) {
    width: 70%;
  }
  @media (max-width: 580px) {
    width: 80%;
  }
  @media (max-width: 505px) {
    width: 95%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

const CategoryItemList = styled.li`
  list-style: none;
  font-weight: 700;
  font-size: 16px;
`;

const Logo = styled.img`
  width: 180px;
`;

const ButtonSearch = styled.button`
  padding: 10px 20px;
  background-color: #0d9488;
  cursor: pointer;
  border: none;
  border-radius: 5px;
  color: #fff;
  &:hover {
    background-color: #222;
  }
`;

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const [shopCartOpen, setShopCartOpen] = useState(false);

  //search
  const [query, setQuery] = useState("");

  const [data, setData] = useState([]);

  const quantity = useSelector((state) => state.cart.quantity);
  const querySlice = useSelector((state) => state.search.query);
  const dispatch = useDispatch();
  const active = useSelector((state) => state.user.currentUser);

  return (
    <>
      <MainContent>
        <Link to={"/"} style={{ color: "white" }}>
          <Logo src="../img/logo.png" />
        </Link>
        <SearchSection>
          <input
            type="text"
            placeholder="Szukaj..."
            onChange={(e) => setQuery(e.target.value)}
            className="Nav__searchBar"
          />
          <ButtonSearch
            color="#0d9488"
            className="Nav__searchIcon loop"
            onClick={() => {
              dispatch(querySearch(query));
            }}
          >
            Szukaj
          </ButtonSearch>
        </SearchSection>
        <UserContainer>
          <div className="ty">
            <Link to={"/koszyk"}>
              <Basket3 color="#fff" size={35} className="shopping-cart" />
              <div className="shopping-circle">{quantity}</div>
            </Link>
          </div>
          <div
            className="menu-container"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <div className="menu-trigger">
              <UserDetail>
                <div>
                  <PersonCircle color="#fff" size={35} />
                </div>
                <div className="ty1">
                  <p class="account">Moje konto</p>
                </div>
              </UserDetail>
            </div>

            <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
              <ul>
                <DropDown active={active} />
              </ul>
            </div>
          </div>
        </UserContainer>
      </MainContent>
      <CategoryContainer>
        {/* {acitve.accessToken && ( */}
        <CategoryList>
          <CategoryItemList>
            <Link to={"/produkty"}>Wszystkie Produkty</Link>
          </CategoryItemList>
          <CategoryItemList>
            <a target="_blank" href="https://www.szybkauprawa.pl/instrukcje">
              Instrukcje uprawy
            </a>
          </CategoryItemList>
          <CategoryItemList>
            <a target="_blank" href="https://www.szybkauprawa.pl/kontakt">
              Kontakt
            </a>
          </CategoryItemList>
        </CategoryList>
        {/* )} */}
      </CategoryContainer>
    </>
  );
};

export default Navigation;
