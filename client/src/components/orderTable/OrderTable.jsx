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
  const handleGetOrder = async (order) => {
    const products = order.products.map((product) => {
      return {
        storage: "db",
        storage_id: 0,
        product_id: `${product.productId}`,
        variant_id: "",
        location: "",
        name: "test",
        sku: "",
        ean: `${product.productId}`,
        price_brutto: 20.0,
        tax_rate: 23,
        quantity: `${product.quantity}`,
        weight: 1,
      };
    });
    try {
      const response = await userRequest.post("baselinker/neworder", {
        methodParams: {
          order_status_id: "204874",
          date_add: "1682182954",
          user_comments: "",
          admin_comments: "Zamówienie wygenerowane przez herkis.com",
          phone: "000000000",
          email: `${order.address.email}`,
          user_login: `${order.address.name}`,
          currency: "PLN",
          payment_method: "Dotpay",
          payment_method_cod: "0",
          paid: "1",
          delivery_method: "Kurier Inpost",
          delivery_price: "14.99",
          delivery_fullname: `${order.address.name}`,
          delivery_company: "",
          delivery_address: `${order.address.delivery}`,
          delivery_city: `${order.address.city}`,
          delivery_state: "",
          delivery_postcode: `${order.address.zip}`,
          delivery_country_code: "PL",
          delivery_point_id: "",
          delivery_point_name: "",
          delivery_point_address: "",
          delivery_point_postcode: "",
          delivery_point_city: "",
          invoice_fullname: `${order.address.name}`,
          invoice_company: "",
          invoice_nip: "",
          invoice_address: `${order.address.delivery}`,
          invoice_city: `${order.address.city}`,
          invoice_state: "",
          invoice_postcode: `${order.address.zip}`,
          invoice_country_code: "PL",
          want_invoice: "0",
          products: products,
        },
      });
      console.log(order);
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
                    {/* <button onClick={handleGetOrder}>Baselinker</button> */}
                    <button onClick={() => handleGetOrder(order)}>
                      Baselinker
                    </button>
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
