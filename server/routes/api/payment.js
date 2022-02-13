const express = require("express");
const router = express.Router();

const auth = require("../../middleware/auth");
const Cart = require("../../models/cart");
const Order = require("../../models/order");
const Payment = require("../../models/payment");

router.post("/success", auth, async function (req, res) {
  const { userId, productId, orderId, data } = req.body;

  try {
    await Order.updateOne(
      { _id: orderId },
      {
        isPaid: true,
      }
    );

    const foundCart = await Cart.findOne({ "products._id": productId });
    const foundCartProduct = foundCart.products.find((p) => p._id == productId);

    if (foundCartProduct.status == "Not processed") {
      await Cart.updateOne(
        { "products._id": productId },
        {
          "products.$.status": "Paid",
        }
      );
    }

    const payment = new Payment({
      user: userId,
      product: productId,
      order: orderId,
      data,
    });

    await payment.save();

    res.status(201).json({
      success: true,
      message: "Your order has been paid successfully!",
    });
  } catch (err) {
    res.status(400).json({
      error: "Your request could not be processed. Please try again.",
    });
  }
});

router.get("/history", auth, function (req, res) {});

module.exports = router;
