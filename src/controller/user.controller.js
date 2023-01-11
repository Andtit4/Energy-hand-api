"use strict";

const { User } = require("../models/user.model");

exports.auth = function (req, res) {
  console.log("[+] Controller Auth for Supervisor");
  const email = req.query.email_noc;
  const password = req.query.password_noc;
  console.log("[+] Email: " + email);
  console.log("[+] Password: " + password);

  User.auth(email, password, function (err, user) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(user);
    }
  });
};
