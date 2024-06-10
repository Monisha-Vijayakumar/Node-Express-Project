const mongoose = require("mongoose");

const { Schema } = mongoose;

const contactSchema = new Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    name: {
      type: String,
      required: [
        true,
        "Contact name is mandatory!! Please add the contact name",
      ],
    },
    email: {
      type: String,
      required: [
        true,
        "Email Address is mandatory!! Please add the email address",
      ],
    },
    phone: {
      type: String,
      required: [
        true,
        "Phone number is mandatory!! Please add the phone number",
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Contact", contactSchema);
