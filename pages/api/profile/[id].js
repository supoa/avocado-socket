import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../../models/User";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";
import Structure from "../../../models/Post";

const handler = nc();

handler.use(isAuth);
//get specific user profile structure information data
handler.get(async (req, res) => {
  console.log("requesting");
  if (req.user.isAdmin == true || req.user._id == req.query.id) {
    try {
      await db.connect();
      const structure = await Structure.find({ userId: req.query.id }).sort({
        createdAt: -1,
      });
      await db.disconnect();
      return res.send(structure);
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  } else {
    return res.send({ msg: "not authenticated or  Not admin user" });
  }
});

handler.use(isAuth, isAdmin);
handler.put(async (req, res) => {
  try {
    await db.connect();
    const structure = await Structure.findOneAndUpdate(
      { _id: req.query.id },
      req.body,
      {
        new: true,
      }
    );
    await db.disconnect();
    return res.send(structure);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

handler.use(isAuth, isAdmin);
handler.delete(async (req, res) => {
  try {
    await db.connect();
    const user = await User.findOneAndDelete({ _id: req.query.id });
    await db.disconnect();
    return res.send(user);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

export default handler;
