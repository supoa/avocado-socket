import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../../models/User";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";
import Structure from "../../../models/Post";

const handler = nc();

handler.use(isAuth);
/// get single user details
handler.get(async (req, res) => {
  if (req.user.isAdmin == true || req.user._id == req.query.id) {
    try {
      await db.connect();
      const user = await User.findOne(
        { _id: req.query.id },
        {
          password: 0,
        }
      );
      console.log({ user });

      await db.disconnect();

      return res.send(user);
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  }

  return res.send({ msg: "not authenticated or  Not admin user" });
});

handler.put(async (req, res) => {
  console.log({
    profile: req.body,
  });
  try {
    await db.connect();
    if (req.user.isAdmin == true || req.user._id == req.query.id) {
      const user = await User.findOneAndUpdate(
        { _id: req.query.id },
        {
          ...req.body,
        },
        {
          new: true,
        }
      );
      console.log(user);
      await db.disconnect();
      return res.send(user);
    } else {
      return res.status(400).send({ message: "UNAuthorized" });
    }
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

//Uploading structure
handler.use(isAuth, isAdmin);
handler.post(async (req, res) => {
  try {
    console.log("....this is runnig");
    await db.connect();
    const structure = new Structure({
      content: req.body.content,
      userId: req.query.id,
    });
    const newStructure = await structure.save();
    res.send(newStructure);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

//delete a structure
handler.use(isAdmin);
handler.delete(async (req, res) => {
  try {
    await db.connect();
    const response = await Structure.findOneAndDelete({ _id: req.query.id });
    await db.disconnect();
    console.log(response);
    res.status(200).send(response);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
});

export default handler;
