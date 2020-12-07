const bodyParser = require("body-parser");
const app = require("express")();
const nodemailer = require("nodemailer");

app.use(bodyParser.json());
app.all("/email", async (req, res) => {
  let mailContainer = req.body;
  if (!mailContainer.length) return;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "taychin@5lab.co",
      pass: "taychin5"
    }
  });

  mailContainer.forEach(async element => {
    let mailOptions = {
      from: "vindication@enron.com",
      to: element.paticipants,
      subject: element.title,
      text: "test"
    };
    await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
  });

  res.json({ data: "data" });
});

module.exports = app;
