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

      await db.disconnect();

      return res.send(user);
    } catch (error) {
      console.log(error);
      return res.send(error);
    }
  }

  return res.send({ msg: "not authenticated or  Not admin user" });
});

// Update user information data
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
          name: req.body.name,
          email: req.body.email,
        },
        {
          new: true,
        }
      );
      console.log(user);
      await db.disconnect();
      return res.send(user);
    } else {
      return res.status(400).send({ message:"UNAuthorized"})
    }
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

//Uploading structure
handler.use(isAuth, isAdmin);
handler.post(async (req, res) => {
  console.log("....this is runnig");
  await db.connect();
  const structure = new Structure({
    content: req.body.content,
    userId: req.query.id,
  });
  const newStructure = await structure.save();
  res.send(newStructure);
});

handler.use(isAuth);
//find all structure in speceific profile
// handler.get(async (req, res) => {
//   if (req.user.isAdmin == true || req.user._id == req.query.id) {
//     try {
//       await db.connect();
//       const structure = await Structure.find({ _id: req.query.id }).sort({
//         createdAt: -1,
//       });
//       await db.disconnect();
//       return res.send(structure);
//     } catch (error) {
//       console.log(error);
//       return res.send(error);
//     }
//   }

//   return res.send({ msg: "not authenticated or  Not admin user" });
// });

export default handler;
