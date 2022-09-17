import nc from "next-connect";
import bcrypt from "bcryptjs";
import Gallery from "../../models/Gallery";
import db from "../../utils/db";
import { signToken, isAdmin, isAuth } from "../../utils/auth";

const handler = nc();

handler.get(async (req, res) => {
  try {
    await db.connect();
    const gallery = await Gallery.find().sort({ _id: -1 });
    await db.disconnect();
    return res.status(200).send(gallery);
  } catch (error) {
    console.log(error);
  }
});

handler.use(isAuth, isAdmin);
handler.post(async (req, res) => {
  try {
    await db.connect();
    const newGallery = await new Gallery({
      ...req.body,
    });
    const gallery = await newGallery.save();
    res.status(200).send(gallery);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

handler.delete(async (req, res) => {
  try {
    await db.connect();

    const resp = await Gallery.findOneAndDelete({ _id: req.query.id });
    console.log(resp);
    res.status(200).send(resp);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

handler.put(async (req, res) => {
  try {
    await db.connect();
    const newGallery = await Gallery.findOneAndUpdate(
      { _id: req.body.id },
      {
        ...req.body,
      },
      {
        new: true,
      }
    );

    const gallery = await Gallery.find({});
    res.status(200).send(gallery);
  } catch (error) {
    console.log(error);
    res.status(500).send({ error });
  }
});

export default handler;
