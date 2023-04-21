const router = require("express").Router();
const axios = require("axios");

const baseUrl = "https://api.baselinker.com/index.php";
const token = process.env.BASELINKER_KEY;

router.get("/orders/:orderId", async (req, res) => {
  const orderId = req.params.orderId;

  const url = `${baseUrl}?method=getOrders&parameters={"order_id":${orderId}}`;
  const response = await axios.get(url, {
    headers: { "X-BLToken": token },
  });
  const data = response.data;

  res.json(data);
});

module.exports = router;
