import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../models/User";

import db from "../../utils/db";
import { signToken } from "../../utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  try {
    console.log(req.body.password);
    await db.connect();
    const exist = await User.findOne({ email: req.body.email });
    if (exist) {
      throw new Error("User already Exist");
    }
    const newUser = new User({
      ...req.body,
      password: bcrypt.hashSync(req.body.password),
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
