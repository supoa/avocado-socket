import nc from "next-connect";
import bcrypt from "bcryptjs";
import Message from "../../../models/Message";
import User from "../../../models/User";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";

const handler = nc();

handler.use(isAuth);
handler.post(async (req, res) => {
  try {
    const { text, chatId } = req.body;
    if (!text || !chatId) {
      console.log("Invalid data passed into request");
      return res.status(400).send({ message: "invalid data" });
    }
    const data = {
      sender: req.user._id,
      text,
      chat: chatId,
    };

    await db.connect();

    const newMessage = await new Message(data);
    const message = await newMessage.save();

    const createdOne = await Message.findOne({ _id: message._id })
      .populate("sender", "name pic")
      .populate({
        path: "chat",
        populate: {
          path: "users",
          select: "name pic email",
        },
      });

    await db.disconnect();
    res.status(200).send(createdOne);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

handler.get(async (req, res) => {
  try {
    await db.connect();
    const messages = await Message.find({ chat: req.body.chatId }).populate(
      "sender",
      "_id"
    );

    await db.disconnect();

    res.status(200).send(messages);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error(error.message);
  }
});

export default handler;
