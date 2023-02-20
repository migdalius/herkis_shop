import Navigation from "../../components/nav/Navigation";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

import styled, { keyframes } from "styled-components";
import TopNav from "../../components/topNav/TopNav";
import SingleProductCart from "../../components/singleproductcart/SingleProductCart";
import Footer from "../../components/footer/Footer";
import FilterSideBar from "../../components/filtersidebar/FilterSideBar";
import MainCategory from "../../components/maincategory/MainCategory";
import Pagination from "../../components/pagination/Pagination";
import { useEffect, useState } from "react";
import axios from "axios";

const BodyContainer = styled.div`
  display: flex;
  justify-content: center;
`;

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
  width: 100%;
  height: auto;
  background-color: #eceff1;
`;

const Hr = styled.hr`
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid #ccc;
  padding: 0;
  margin-bottom: 31px;
`;

const ProductList = () => {
  const location = useLocation();
  const category = location.state;

  const [products, setProducts] = useState([]);
  //Adimn

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          location.state != null
            ? `http://localhost:5000/api/products?category=${location.state}`
            : "http://localhost:5000/api/products?category=all"
        );
        setProducts(res.data);
      } catch (err) {}
    };
    getProducts();
  }, []);

  return (
    <div className="app">
      <BackgroundContainer>
        <Navigation />
        <BodyContainer>
          <MainContainer>
            <LeftContainer>
              <FilterSideBar />
            </LeftContainer>
            <CenterContainer>
              <MainCategory category={category} />
              <Hr />
              {products.map((item) => {
                return (
                  <Link to={`../lista-produktow/${item._id}`}>
                    <SingleProductCart item={item} key={item?._id} />
                  </Link>
                );
              })}
              <Hr />
              <Pagination />
            </CenterContainer>
          </MainContainer>
        </BodyContainer>
      </BackgroundContainer>

      <Footer />
    </div>
  );
};

export default ProductList;
