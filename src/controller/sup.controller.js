"use strict";

const { Sup } = require("../models/sup.model");

exports.auth = function (req, res) {
  console.log("[+] Controller Auth for Supervisor");
  const email = req.query.email_noc;
  const password = req.query.password_noc;
  console.log("[+] Email: " + email);
  console.log("[+] Password: " + password);

  Sup.auth(email, password, function (err, sup) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(sup);
    }
  });
};
