import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../models/User";
import db from "../../utils/db";
import { signToken } from "../../utils/auth";
import nodemailer from "nodemailer";

const handler = nc();

handler.post(async (req, res) => {
  try {
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "sohanur25800@@gmail.com",
        pass: "wydqyslatehelgeq",
      },
    });

    var mailOptions = {
      from: "sohanur25800@@gmail.com",
      to: "sohanur01744@gmail.com , s-2019818083",
      subject: "Sending Email using Node.js",
      text: "That was easy!",
    };

    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).send(info.response);
      }
    });
  } catch (error) {
    console.log(error);
  }
});

export default handler;
