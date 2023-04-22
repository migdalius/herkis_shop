import React from "react";
import "./orderTable.css";
import {
  Bag,
  BagCheck,
  BagDash,
  BoxSeamFill,
  Cart,
  DoorClosed,
  PencilSquare,
  Trash3Fill,
  Truck,
  TruckFlatbed,
} from "react-bootstrap-icons";
import { userRequest } from "../../pages/requestMethods";
import { Link } from "react-router-dom";

const OrderTable = ({ orders }) => {
  const handleGetOrder = async () => {
    try {
      const response = await userRequest.post("baselinker/neworder");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <table className="styled-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nazwa użytkownika</th>
            <th>Przedmioty</th>
            <th>Kwota</th>
            <th>Przesyłki</th>
            <th>Baselinker</th>

            <th>Operacje</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            return (
              <>
                <tr>
                  <td>{order._id}</td>
                  <td>{order.address.name}</td>
                  <td>
                    {order.products.map((product) => {
                      return (
                        <>
                          <div className="container">
                            <div>
                              <img
                                className="thumbnail"
                                src="../img/product.png"
                                alt=""
                              />
                            </div>
                            <div className="product-container">
                              <div>
                                {product.quantity} x {product.productId}
                              </div>
                              <div>26.99 zł</div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </td>

                  <td>300 zł</td>
                  <td>
                    <div className="delivery-icons">
                      <BoxSeamFill size={20} color={"green"} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                      <BoxSeamFill size={20} />
                    </div>
                  </td>
                  <th>
                    <button onClick={handleGetOrder}>Baselinker</button>
                  </th>

                  <th>
                    <div className="icons">
                      <Link to={`../moje-konto/zamowienia/${order._id}`}>
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

export default OrderTable;
