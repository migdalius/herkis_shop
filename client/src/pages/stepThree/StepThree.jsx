import Navigation from "../../components/nav/Navigation";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styled, { keyframes } from "styled-components";
import TopNav from "../../components/topNav/TopNav";
import SingleProductCart from "../../components/singleproductcart/SingleProductCart";
import Footer from "../../components/footer/Footer";
import FilterSideBar from "../../components/filtersidebar/FilterSideBar";
import MainCategory from "../../components/maincategory/MainCategory";
import Pagination from "../../components/pagination/Pagination";
import NextStep from "../../components/buttons/NextStep";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 1920px;
  height: auto;
  margin-left: 5%;
  margin-right: 5%;
  margin-top: 50px;
  gap: 10px;
  padding-bottom: 60px;
`;

const LeftContainer = styled.div`
  width: 15%;
  height: 650px;
  background-color: #fff;
`;

const CenterContainer = styled.div`
  width: 45%;
  height: auto;
  background-color: #fff;
  position: relative;
`;

const BackgroundContainer = styled.div`
  width: 100vw;
  height: auto;
  background-color: #eceff1;
`;

const Hr = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  padding: 0;
  margin-bottom: 30px;
`;

const StepThree = () => {
  return (
    <div className="app">
      <BackgroundContainer>
        <Navigation />
        <MainContainer>
          <LeftContainer>
            <FilterSideBar />
          </LeftContainer>
          <CenterContainer>
            <NextStep />
            <TopNav />
            <Hr />
            <MainCategory />
            <Hr />
            <SingleProductCart />
            <SingleProductCart />
            <SingleProductCart />
            <SingleProductCart />
            <SingleProductCart />
            <SingleProductCart />
            <SingleProductCart />
            <SingleProductCart />
            <SingleProductCart />
            <SingleProductCart />
            <Hr />
            <Pagination />
          </CenterContainer>
        </MainContainer>
      </BackgroundContainer>
      <Footer />
    </div>
  );
};

export default StepThree;
