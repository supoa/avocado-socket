import mongoose from "mongoose";

const announcementSchema = new mongoose.Schema(
  {
    content: { type: String },
  },
  {
    timestamps: true,
  }
);



const Announcement =
  mongoose.models.Announcement ||
  mongoose.model("Announcement", announcementSchema);
export default Announcement;
