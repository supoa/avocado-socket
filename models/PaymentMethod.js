import mongoose from "mongoose";

const paymentMethodSchema = new mongoose.Schema(
  {
    content: { type: String },
  },
  {
    timestamps: true,
  }
);

const PaymentMethod =
  mongoose.models.PaymentMethod ||
  mongoose.model("PaymentMethod", paymentMethodSchema);
export default PaymentMethod;
