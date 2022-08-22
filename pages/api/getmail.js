import nc from "next-connect";
import mailgun from "mailgun-js";

const handler = nc();

handler.post(async (req, res) => {
  const { email, message, name } = req.body;

  try {
    const resp = await mailgun({
      apiKey: process.env.MAILGUN_API_KEY,
      domain: process.env.MAILGUN_DOMAIN,
    })
      .messages()
      .send({
        from: email,
        to: "sohanur25800@gmail.com",
        subject: "Portfolio Review",
        html: `<p>${message} </p>`,
      });

    console.log({ resp });

    res.status(200).json({ message: `Email has been sent` });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Error sending email" });
  }
});

export default handler;
