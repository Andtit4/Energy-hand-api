"use strict";
const { Demande } = require("../models/demande.model");

exports.create = function (req, res) {
  console.log("[+] Controller Create demande");
  const dmde = new Demande(req.body);
  Demande.create(dmde, function (err, demande) {
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
  Demande.all(function (err, demande) {
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
  Demande.byEmail(email, function (err, demande) {
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
  Demande.delete_by_id(id_demande, function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};

exports.notified = function (req, res) {
  console.log("[+] Controller get notifed demande");
  const email_user = req.query.email_user;
  Demande.notified(email_user, function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};

exports.notified_end = function (req, res) {
  console.log("[+] Controller get notifed demande");
  const showed = req.query.showed;
  const email_user = req.query.email_user;
  Demande.notified_end(showed, email_user, function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};

exports.notified_not = function (req, res) {
  console.log("[+] Controller get notifed demande not treat");
  Demande.notified_not(function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};
