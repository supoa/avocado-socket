import nc from "next-connect";
import bcrypt from "bcryptjs";
import Message from "../../../models/Message";
import User from "../../../models/User";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";

const handler = nc();

handler.use(isAuth);
handler.get(async (req, res) => {
  try {
    await db.connect();
    const messages = await Message.find({ chat: req.query.chatId });

    await db.disconnect();

    res.status(200).send(messages);
  } catch (error) {
    console.log(error);
    res.status(400);
    throw new Error(error.message);
  }
});

export default handler;
