const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    city: { type: String },
    delivery: { type: String },
    name: { type: String },
    phone: { type: Number },
    zip: { type: String },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
