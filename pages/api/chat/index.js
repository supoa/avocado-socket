import nc from "next-connect";
import bcrypt from "bcryptjs";
import Chat from "../../../models/Chat";
import User from "../../../models/User";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";
import Message from "../../../models/Message";

const handler = nc();

handler.use(isAuth);

handler.post(async (req, res) => {
  try {
    // const { userId } = req.body;

    // if (!userId) {
    //   console.log("UserId param not sent with request");
    //   return res.sendStatus(400);
    // }

    const admin = await User.find({ isAdmin: true });

    // check one of these are admin
    // if (!(req.user.isAdmin || admin.find((item) => item._id == userId))) {
    //   return res.status(500).send({ message: "not permissable" });
    // }

    await db.connect();
    var existetChat = await Chat.find({
      $and: [
        { users: { $elemMatch: { $eq: req.user._id } } },
        { users: { $elemMatch: { $eq: admin[0]._id } } },
      ],
    })
      .populate("users", "_id , isAdmin ")
      .populate("latestMessage");

    if (existetChat.length > 0) {
      res.send(existetChat[0]);
    } else {
      let chatData = {
        users: [req.user._id, admin[0]._id],
      };

      const newChat = await new Chat(chatData);
      const createdChat = await newChat.save();

      const FullChat = await Chat.findOne({ _id: createdChat._id })
        .populate("latestMessage")
        .populate("users", "_id , name , picture");

      await db.disconnect();
      res.status(200).json(FullChat);
    }
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error(error.message);
  }
});

handler.use(isAuth, isAdmin);
handler.get(async (req, res) => {
  try {
    await db.connect();
    const users = await User.find({});
    await db.disconnect();
    res.status(200).send(users);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

handler.delete(async (req, res) => {
  try {
    await db.connect();
    const resp = await Message.remove({ chat: req.body.chatId });
    await db.disconnect();
    res.status(200).send(resp);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default handler;
