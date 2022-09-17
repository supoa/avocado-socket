import mongoose from "mongoose";

const gallerySchema = new mongoose.Schema(
    
  {
    content: { type: String },
    title: { type: String },
  },
  {
    timestamps: true,
  }
);

const Gallery =
  mongoose.models.Gallery || mongoose.model("Gallery", gallerySchema);
export default Gallery;
