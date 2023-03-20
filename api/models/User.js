const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true },
    name: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    adress: { type: String },
    zip: { type: String },
    city: { type: String },
    phone: { type: Number },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
