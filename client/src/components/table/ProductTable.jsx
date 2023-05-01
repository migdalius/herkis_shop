import React, { useEffect, useState } from "react";
import "./productTable.css";
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { userRequest } from "../../pages/requestMethods";

const ProductTable = ({ products }) => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    setProductList(products);
  }, [products]);

  const productDelete = async (product) => {
    try {
      await userRequest.delete(`products/${product._id}`);
      setProductList(productList.filter((p) => p._id !== product._id));
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th class="p-title-id">ID</th>
            <th class="p-trumbnail">Miniatura</th>
            <th>Nazwa produktu</th>
            <th>Cena</th>
            <th class="p-category">Kategoria</th>
            <th>Operacje</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <>
                <tr>
                  <td class="p-title-id-container">{product._id}</td>
                  <td class="p-img">
                    <img class="product-img" src={product.img} />
                  </td>
                  <td>{product.title}</td>

                  <td>{product.price}</td>

                  <td class="p-category-content">
                    {product.categories.map((p) => {
                      return <p>{p}</p>;
                    })}
                  </td>
                  <th>
                    <div className="icons">
                      <Link to={`../moje-konto/produkty/${product._id}`}>
                        <PencilSquare
                          size={24}
                          color={"#064e3b"}
                          style={{ cursor: "pointer" }}
                        />
                      </Link>

                      <Trash3Fill
                        size={24}
                        color={"#dc2626"}
                        style={{ cursor: "pointer" }}
                        onClick={() => productDelete(product)}
                      />
                    </div>
                  </th>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default ProductTable;
