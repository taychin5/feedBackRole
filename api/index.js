const bodyParser = require("body-parser");
const app = require("express")();
const nodemailer = require("nodemailer");

app.use(bodyParser.json());
app.all("/email", (req, res) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "taychin@5lab.co",
      pass: "taychin5" // naturally, replace both with your real credentials or an application-specific password
    }
  });

  const mailOptions = {
    from: "vindication@enron.com",
    to: "tay.161.tod@gmail.com",
    subject: "Invoices due",
    text: "Dudes, we really need your money."
  };

  transporter.sendMail(mailOptions, function(error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.json({ data: "data" });
});

module.exports = app;
