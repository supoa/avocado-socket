import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  // parent: { type: mongoose.Schema.Types.ObjectId, ref: "Message" },
  text: { type: String, trim: true },
  chat: { type: mongoose.Schema.Types.ObjectId, ref: "Chat" },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

const Message =
  mongoose.models.Message || mongoose.model("Message", messageSchema);
export default Message;
