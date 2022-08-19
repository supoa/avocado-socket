import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../../models/User";

import db from "../../../utils/db";
import { signToken, isAdmin, isAuth } from "../../../utils/auth";
import Structure from "../../../models/Post";

const handler = nc();

// handler.use(isAuth);

// handler.use(isAuth);
handler.get(async (req, res) => {
  try {
    await db.connect();
    const structures = await Structure.find({});
    await db.disconnect();
    return res.send(structures);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});

export default handler;
