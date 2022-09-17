import mongoose from "mongoose";

const backgroundSchema = new mongoose.Schema(
  {
    content: { type: String },
  },
  {
    timestamps: true,
  }
);

const Background =
  mongoose.models.Background || mongoose.model("Background", backgroundSchema);
export default Background;
