import nc from "next-connect";
import bcrypt from "bcryptjs";
import Announcement from "../../models/Announcement";
import db from "../../utils/db";
import { signToken, isAdmin, isAuth } from "../../utils/auth";

const handler = nc();

handler.get(async (req, res) => {
  try {
    const notice = await Announcement.find().sort({ _id: -1 }).limit(1);
    return res.status(200).send(notice);
  } catch (error) {
    console.log(error);
  }
});


handler.use(isAuth, isAdmin);
handler.post(async (req, res) => {
  try {
    await db.connect();
    const newNotice = await new Announcement({
      ...req.body,
    });
    const notice = await newNotice.save();
    res.status(200).send(notice);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

export default handler;
