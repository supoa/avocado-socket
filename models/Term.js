import mongoose from "mongoose";

const termSchema = new mongoose.Schema(
  {
    content: { type: String },
  },
  {
    timestamps: true,
  }
);

const Term = mongoose.models.Term || mongoose.model("Term", termSchema);
export default Term;
