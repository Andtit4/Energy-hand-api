"use strict";
const jwt = require("jsonwebtoken");
const auth = require("../model/auth.model");
const bcrypt = require("bcrypt");

exports.auth = function (req, res) {
  console.log("[+] Controller Auth");
  const email = req.body.email;
  const password = req.body.password;
  const passhash = bcrypt.hashSync(password, 10);
  const token = jwt.sign(
    {
      id: email,
    },
    "jwtPrivateToken",
    { expiresIn: "5m" }
  );
  console.log("[+] Email: " + email);
  console.log("[+] Password: " + password);
  auth(email, passhash, function (err, noc) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send({ noc: noc, token: token });
    }
  });
};
