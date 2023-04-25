const router = require("express").Router();
const axios = require("axios");
const crypto = require("crypto");

// Dotpay API Credentials
const API_ID = "709400";
const API_PIN = "jTy7V42Vzen8voKqp3Xmol65tCdaURLE";

router.get("/payment", async (req, res) => {
  try {
    // Generate random control parameter
    const control = crypto.randomBytes(8).toString("hex");

    // Calculate checksum
    const amount = 100.0;
    const currency = "PLN";
    const description = "Test payment";
    const email = "test@example.com";
    const urlc = "http://example.com/notifications";
    const URL = `https://ssl.dotpay.pl/test_payment/?id=${API_ID}&amount=${amount}&currency=${currency}&description=${description}&email=${email}&control=${control}&URLC=${urlc}`;
    const checksum = crypto
      .createHash("sha256")
      .update(`${API_PIN}${URL}${API_PIN}`)
      .digest("hex");

    // Make API request
    const response = await axios.get(URL, {
      headers: {
        // "Content-Type": "application/x-www-form-urlencoded",
        "Content-Type": "application/json",
      },
      data: `id=${API_ID}&amount=${amount}&currency=${currency}&description=${description}&email=${email}&control=${control}&URLC=${urlc}&checksum=${checksum}`,
    });
    console.log(response);

    res.send(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

module.exports = router;
