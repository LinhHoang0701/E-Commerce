const Mongoose = require("mongoose");
const { Schema } = Mongoose;

const paymentSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
    order: {
      type: Schema.Types.ObjectId,
      ref: "Order",
    },
    data: {
      type: Array,
      default: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Mongoose.model("Payment", paymentSchema);
