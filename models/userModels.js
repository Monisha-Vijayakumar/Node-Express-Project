const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: [true, "Username is mandatory"],
    },
    email: {
      type: String,
      required: [true, "Email address is required"],
      unique: [true, "Email address is already registered or taken"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
