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

module.exports = router;
