import nc from "next-connect";
import bcrypt from "bcryptjs";
import Background from "../../models/BackGround";
import db from "../../utils/db";
import { signToken, isAdmin, isAuth } from "../../utils/auth";

const handler = nc();

handler.get(async (req, res) => {
  try {
    await db.connect();
    const bg = await Background.find().sort({ _id: -1 }).limit(1);
    await db.disconnect();
    return res.status(200).send(bg);
  } catch (error) {
    console.log(error);
  }
});

handler.use(isAuth, isAdmin);
handler.post(async (req, res) => {
  try {
    await db.connect();
    const newBg = await new Background({
      ...req.body,
    });
    const bg = await newBg.save();
    res.status(200).send(bg);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

export default handler;
