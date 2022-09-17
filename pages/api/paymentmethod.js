import nc from "next-connect";
import bcrypt from "bcryptjs";
import PaymentMethod from "../../models/PaymentMethod";
import db from "../../utils/db";
import { signToken, isAdmin, isAuth } from "../../utils/auth";

const handler = nc();

handler.get(async (req, res) => {
  try {
    await db.connect();
    const pm = await PaymentMethod.find().sort({ _id: -1 }).limit(1);
    await db.disconnect();
    return res.status(200).send(pm);
  } catch (error) {
    console.log(error);
  }
});

handler.use(isAuth, isAdmin);
handler.post(async (req, res) => {
  try {
    await db.connect();
    const newPm = await new PaymentMethod({
      ...req.body,
    });
    const pm = await newPm.save();
    res.status(200).send(pm);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

export default handler;
