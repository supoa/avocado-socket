import mongoose from "mongoose";

const connectionSchema = new mongoose.Schema(
  {
    date: { type: Date, default: Date.now },
   
  },
  {
    timestamps: true,
  }
);

const Connection =
  mongoose.models.Connection || mongoose.model("Connection", connectionSchema);
export default Connection;
