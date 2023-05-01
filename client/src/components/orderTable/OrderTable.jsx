import React, { useState } from "react";
import "./orderTable.css";
import {
  Bag,
  BagCheck,
  BagDash,
  BoxSeamFill,
  Cart,
  DoorClosed,
  PencilSquare,
  PlusCircle,
  Trash3Fill,
  Truck,
  TruckFlatbed,
} from "react-bootstrap-icons";
import { userRequest } from "../../pages/requestMethods";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const OrderTable = ({ orders }) => {
  const [activeOrders, setActiveOrders] = useState([]);

  const handleGetOrder = async (order) => {
    const index = activeOrders.indexOf(order._id);
    if (index > -1) {
      setActiveOrders(activeOrders.filter((id) => id !== order._id));
    } else {
      setActiveOrders([...activeOrders, order._id]);
    }
    const products = order.products.map((product) => {
      return {
        storage: "db",
        storage_id: 0,
        product_id: `${product.productId}`,
        variant_id: "",
        location: "",
        name: `${product.productName}`,
        sku: "",
        ean: `${product.productId}`,
        price_brutto: `${product.productPrice}`,
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

      if (response.data.status === "SUCCESS") {
        toast.success("Zamówienie dodane do Baselinkera pomyślnie!", {
          autoClose: 3000,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <ToastContainer position="bottom-left" />
      <table className="styled-table">
        <thead>
          <tr>
            <th class="product-title-id">ID</th>
            <th class="product-title-username">Nazwa użytkownika</th>
            <th>Przedmioty</th>
            <th class="product-title-price">Kwota</th>
            <th>Baselinker</th>
            <th>Operacje</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => {
            const isActive = activeOrders.includes(order._id);
            return (
              <>
                <tr>
                  <td class="product-title-id-content">{order._id}</td>
                  <td class="product-title-user-name-content">
                    {order.address.name}
                  </td>
                  <td>
                    {order.products.map((product) => {
                      return (
                        <>
                          <div className="container" key={product._id}>
                            <div>
                              <img
                                className="thumbnail"
                                src="../img/product.png"
                                alt=""
                              />
                            </div>
                            <div className="product-container">
                              <div>
                                {product.quantity} x {product.productName}
                              </div>
                              <div>{product.productPrice} zł</div>
                            </div>
                          </div>
                        </>
                      );
                    })}
                  </td>

                  <td class="product-title-price">{order.amount} zł</td>

                  <th>
                    <div
                      className={`baselinkerWraper${isActive ? " active" : ""}`}
                      onClick={() => handleGetOrder(order)}
                    >
                      <PlusCircle
                        size={20}
                        color={"#e6f2fb"}
                        style={{ cursor: "pointer" }}
                      />
                      <button className="baselinker">Baselinker</button>
                    </div>
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
