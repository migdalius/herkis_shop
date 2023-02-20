const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
mongoose.set("strictQuery", true);
dotenv.config();

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));
//
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/product");
const cartRoute = require("./routes/cart");
const orderRoute = require("./routes/order");
const categoryRoute = require("./routes/category");

// mongo db connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB connection success!"))
  .catch((err) => console.log(err));

//add json
app.use(express.json());
// endpoints
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/categories", categoryRoute);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
