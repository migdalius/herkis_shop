const router = require("express").Router();
const axios = require("axios");
const { verifyTokenAndAdmin } = require("./verifyToken");

router.post("/orders", verifyTokenAndAdmin, async (req, res) => {
  const baseUrl = "https://api.baselinker.com/connector.php";
  const blToken = process.env.BASELINKER_KEY;
  const method = "getOrders";
  const dateFrom = 1407341754;

  const response = await axios.post(
    baseUrl,
    new URLSearchParams({
      method: method,
      parameters: JSON.stringify({ date_from: dateFrom }),
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-BLToken": blToken,
      },
    }
  );

  const data = response.data;
  console.log(data);
  res.send(data);
});

router.post("/neworder", verifyTokenAndAdmin, async (req, res) => {
  const baseUrl = "https://api.baselinker.com/connector.php";
  const blToken = process.env.BASELINKER_KEY;
  const method = "addOrder";
  const methodParams = {
    order_status_id: "204874",
    date_add: "1682182954",
    user_comments: "User comment",
    admin_comments: "Seller test comments",
    phone: "693123123",
    email: "test@test.com",
    user_login: "nick2",
    currency: "GBP",
    payment_method: "PayPal",
    payment_method_cod: "0",
    paid: "1",
    delivery_method: "Expedited shipping",
    delivery_price: "10",
    delivery_fullname: "John Doe",
    delivery_company: "Company",
    delivery_address: "Long Str 12",
    delivery_city: "London",
    delivery_state: "",
    delivery_postcode: "E2 8HQ",
    delivery_country_code: "GB",
    delivery_point_id: "",
    delivery_point_name: "",
    delivery_point_address: "",
    delivery_point_postcode: "",
    delivery_point_city: "",
    invoice_fullname: "John Doe",
    invoice_company: "Company",
    invoice_nip: "GB8943245",
    invoice_address: "Long Str 12",
    invoice_city: "London",
    invoice_state: "",
    invoice_postcode: "E2 8HQ",
    invoice_country_code: "GB",
    want_invoice: "0",
    products: [
      {
        storage: "db",
        storage_id: 0,
        product_id: "5434",
        variant_id: 52124,
        location: "A1-13-7",
        name: "Harry Potter and the Chamber of Secrets",
        sku: "LU4235",
        ean: "1597368451236",
        price_brutto: 20.0,
        tax_rate: 23,
        quantity: 2,
        weight: 1,
      },
    ],
  };

  const response = await axios.post(
    baseUrl,
    new URLSearchParams({
      method: method,
      parameters: JSON.stringify(methodParams),
    }),
    {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-BLToken": blToken,
      },
    }
  );
  console.log(methodParams);

  const data = response.data;
  console.log(data);
  res.send(data);
});

module.exports = router;
