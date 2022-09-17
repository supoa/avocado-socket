import nc from "next-connect";
import bcrypt from "bcryptjs";
import Gallery from "../../models/Gallery";
import db from "../../utils/db";
import { signToken, isAdmin, isAuth } from "../../utils/auth";

const handler = nc();

handler.use(isAuth, isAdmin);
handler.delete(async (req, res) => {
  try {
    await db.connect();
    const resp = await Gallery.findOneAndDelete({ _id: req.body.id });
    res.status(200).send(resp);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

export default handler;
