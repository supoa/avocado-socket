import nc from "next-connect";
import bcrypt from "bcryptjs";
import Term from "../../models/Term";
import db from "../../utils/db";
import { signToken, isAdmin, isAuth } from "../../utils/auth";

const handler = nc();

handler.get(async (req, res) => {
  try {
    await db.connect();
    const term = await Term.find().sort({ _id: -1 }).limit(1);
    await db.disconnect();
    return res.status(200).send(term);
  } catch (error) {
    console.log(error);
  }
});

handler.use(isAuth, isAdmin);
handler.post(async (req, res) => {
  try {
    await db.connect();
    const newTerm = await new Term({
      ...req.body,
    });
    const term = await newTerm.save();
    res.status(200).send(term);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

export default handler;
