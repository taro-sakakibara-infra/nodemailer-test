import { createTransport } from "nodemailer";

const transporter = createTransport({
  service: "gmail",
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_HOST,
    pass: process.env.MAIL_PASS,
  },
});

const sendMail = async (req: any, res: any) => {
  const data = JSON.parse(req.body);

  const mailOptionsToHost = {
    from: data.email,
    to: process.env.MAIL_HOST,
    subject: "お問い合わせ",
    text: data.text,
  };

  const mailOptionsToCustomer = {
    from: process.env.MAIL_HOST,
    to: data.email,
    subject: "お問い合わせ",
    text: "お問い合わせありがとうございます。",
  };

  Promise.all([
    transporter.sendMail(mailOptionsToHost),
    transporter.sendMail(mailOptionsToCustomer),
  ])
    .then((response) => {
      console.log(response);
      res.status(200).send("送信に成功！");
    })
    .catch((error) => {
      console.log(error);
      res.status(500).send("送信に失敗！");
    });
};

export default sendMail;
