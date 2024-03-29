"use strict";
const { Demande } = require("../models/demande.model");

exports.create = function (req, res) {
  console.log("[+] Controller Create demande");
  const type_demande = req.body.type_demande;
  const site = req.body.site;
  const equipement = req.body.equipement;
  const quantite = req.body.quantite;
  const notified = req.body.notified;
  const id_user = req.body.id_user;

  const mounth = req.body.mounth;
  const day = req.body.day;
  const year = req.body.year;
  const status = req.body.status;
  const time = req.body.time;
  // const dmde = new Demande(req.body);
  Demande.create(
    type_demande,
    site,
    equipement,
    quantite,
    notified,
    id_user,
    mounth,
    day,
    year,
    status,
    time,
    function (err, demande) {
      if (err) {
        res.send("[-] An error occured " + err);
        console.log("[-] An error occured " + err);
      } else {
        res.send(demande);
      }
    }
  );
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

exports.getById = function (req, res) {
  const id_user = req.query.id_user;
  Demande.getById(id_user, function (err, demande) {
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
  const id_user = req.query.id_user;
  Demande.notified_end( id_user, function (err, demande) {
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

exports.nb = function (req, res) {
  console.log("Controller nb demande");
  Demande.nb(function (err, nb) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(nb);
    }
  });
};

exports.updateStatus = function (req, res) {
  const status = req.query.status;
  const id_demande = req.query.id_demande;
  Demande.updateStatus(status, id_demande, function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};

exports.getSiteHs = function (req, res) {
  Demande.getSiteHs(function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};

exports.getNbHs = function (req, res) {
  Demande.getNbHs(function (err, demande) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(demande);
    }
  });
};
