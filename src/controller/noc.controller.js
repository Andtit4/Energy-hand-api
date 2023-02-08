"use strict";
const jwt = require("jsonwebtoken");
const { Noc } = require("../models/noc.model");

exports.auth = function (req, res) {
  console.log("[+] Controller Auth");
  const email = req.body.email_noc;
  const password = req.body.password_noc;

  const token = jwt.sign(
    {
      id: email,
    },
    "jwtPrivateToken",
    { expiresIn: "5m" }
  );

  console.log("[+] Email: " + email);
  console.log("[+] Password: " + password);

  Noc.auth(email, password, function (err, noc) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send({ noc: noc, token: token });
    }
  });
};
