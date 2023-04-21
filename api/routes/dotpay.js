const router = require("express").Router();
const axios = require("axios");

const DOTPAY_API_ENDPOINT = "https://ssl.dotpay.pl/test_seller/api/v1/";

router.post("/payment", async (req, res) => {
  const { amount, description, control } = req.body;

  try {
    const response = await axios.post(
      DOTPAY_API_ENDPOINT,
      {
        id: process.env.DOTPAY_ID,
        amount,
        description,
        control,
        lang: "pl",
        currency: "PLN",
        url: `${process.env.BASE_URL}/api/pay/success`,
        urlc: `${process.env.BASE_URL}/api/pay/notify`,
        type: 4,
        ch_lock: 1,
      },
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } }
    );

    res.status(200).json({ url: response.data.url });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.post("/notify", (req, res) => {
  const { operation_number, operation_status } = req.body;

  // handle payment status update

  res.status(200).send("OK");
});

router.get("/success", (req, res) => {
  // handle successful payment

  res.status(200).send("Payment successful");
});

module.exports = router;
