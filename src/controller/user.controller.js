"use strict";

const { User } = require("../models/user.model");

exports.auth = function (req, res) {
  console.log("[+] Controller Auth for User");
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

exports.create = function (req, res) {
  const nom = req.query.nom_user;
  const prenom = req.query.prenom_user;
  const email = req.query.email_user;
  const numero = req.query.telephone_user;

  User.create(nom, prenom, email, numero, function (err, user) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(user);
    }
  });
};
