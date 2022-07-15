import nc from "next-connect";
import bcrypt from "bcryptjs";
import Connection from "../../../models/Connection";

import db from "../../../utils/db";
// import { signToken, isAdmin, isAuth } from "../../../utils/auth";

const handler = nc();

handler.post(async (req, res) => {
  try {
    await db.connect();
    const connection = await new Connection();
    await connection.save();
    await db.disconnect();
    res.status(200).send({ message: "new connection" });
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

// handler.use(isAuth, isAdmin);

handler.get(async (req, res) => {
  try {
    await db.connect();
    const connections = await Connection.find({});
    await db.disconnect();
    return res.send(connections);
  } catch (error) {
    console.log(error);
    return res.send(error);
  }
});



export default handler;
