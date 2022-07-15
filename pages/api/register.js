import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../models/User";

import db from "../../utils/db";
import { signToken } from "../../utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password),
      NID: req.body.NID,
      payMentMethod: req.body.payMentMethod,
      isAdmin: false,
      country: req.body.country,
    });
    const user = await newUser.save();
    await db.disconnect();

    const token = signToken(user);
    res.send({
      token,
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

export default handler;
