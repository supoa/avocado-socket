import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
    rank: { type: String },
    Nid: { type: String },
    Join: { type: String },
    // paymentHistory: { type: String },
    picture: {
      type: String,
      default: "https://cdn-icons-png.flaticon.com/512/3135/3135768.png",
    },
    country: { type: String, required: true },
    revenue: { type: String },
    // teamMembers: { type: String },
    // totalAsset: { type: String },
    // Purchase: { type: String },
    fil: { type: String },
    ltc: { type: String },
    bnb: { type: String },
    package: { type: String },
    announcement: { type: String },
    team: { type: String },
    NNID: { type: String },
    NEmail: { type: String },
    workingDays: { type: String },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
