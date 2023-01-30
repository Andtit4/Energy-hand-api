"use strict";
const { Traiter } = require("../models/traiter.model");

exports.create = function (req, res) {
  console.log("[+] Controller Create traiter");
  const dmde = new Traiter(req.body);
  Traiter.create(dmde, function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};

exports.all = function (req, res) {
  console.log("[+] Controller get all demande");
  Traiter.all(function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};

exports.byEmail = function (req, res) {
  console.log("[+] Controller get demande by email");
  const email = req.query.email_user;
  console.log("[+] email :" + email);
  Traiter.byEmail(email, function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};

exports.delete_by_id = function (req, res) {
  console.log("[+] Controller get delete demande by id");
  const id_demande = req.query.id_demande;
  Traiter.delete_by_id(id_demande, function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};
