"use strict";

const { Noc } = require("../models/noc.model");

exports.auth = function (req, res) {
  console.log("[+] Controller Auth");
  const email = req.query.email_noc;
  const password = req.query.password_noc;
  console.log("[+] Email: " + email);
  console.log("[+] Password: " + password);

  Noc.auth(email, password, function (err, noc) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(noc);
    }
  });
};
