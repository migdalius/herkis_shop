import React from "react";
import "./productTable.css";
import { PencilSquare, Trash3Fill } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
const ProductTable = ({ products }) => {
  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Miniatura</th>
            <th>Nazwa produktu</th>
            <th>Cena</th>
            <th>Kategoria</th>

            <th>Operacje</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => {
            return (
              <>
                <tr>
                  <td>{product._id}</td>
                  <td>
                    <img src={product.img} />
                  </td>
                  <td>{product.title}</td>

                  <td>{product.price}</td>

                  <td>
                    {product.categories.map((p) => {
                      return <p>{p}</p>;
                    })}
                  </td>
                  <th>
                    <div className="icons">
                      <Link to={`../moje-konto/lista-uzytkownikow/`}>
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
