const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    adress: { type: String, required: true, unique: true },
    zip: { type: String, required: true, unique: true },
    city: { type: String, required: true, unique: true },
    phone: { type: Number, required: true, unique: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    img: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
