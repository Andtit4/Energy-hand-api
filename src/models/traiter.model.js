"use strict";
const { connect } = require("../config/db");
var Traiter = function (traiter) {
  this.id_demande = traiter.id_demande;
  this.type_demande = traiter.type_demande;
  this.site = traiter.site;
  this.equipement = traiter.equipement;
  this.quantite = traiter.quantite;
  this.notified = traiter.notified;
  this.email_user = traiter.email_user;
};

Traiter.create = function (newDmde, result) {
  connect.query("INSERT INTO traiter SET ?", newDmde, function (err, res) {
    if (err) {
      console.log("[-] An error occurred : " + err);
      res = {
        error: err,
      };
      result(err, res, null);
    } else {
      console.log("[+] Result : " + res);
      result(err, res, null);
    }
  });
};

Traiter.all = function (result) {
  connect.query("SELECT * FROM traiter", function (err, res) {
    if (err) {
      console.log("[-] An error occurred : " + err);
      res[0] = {
        error: err,
      };
      result(err, res, null);
    } else {
      console.log("[+] Result : " + res);
      result(err, res, null);
    }
  });
};

Traiter.nb = function (result) {
  connect.query("SELECT COUNT(*) AS nb FROM traiter", function (err, res) {
    if (err) {
      console.log("[-] An error occurred : " + err);
      res[0] = {
        error: err,
      };
      result(err, res, null);
    } else {
      console.log("[+] Result : " + res);
      result(err, res, null);
    }
  });
};

Traiter.byEmail = function (email, result) {
  connect.query(
    "SELECT * FROM traiter WHERE email_user = ?",
    [email],
    function (err, res) {
      if (err) {
        console.log("[-] An error occurred : " + err);
        res[0] = {
          error: err,
        };
        result(err, res, null);
      } else {
        console.log("[+] Result : " + res);
        result(err, res, null);
      }
    }
  );
};

Traiter.delete_by_id = function (id, result) {
  connect.query(
    "DELETE FROM traiter WHERE id_demande = ?",
    id,
    function (err, res) {
      if (err) {
        console.log("[-] An error occurred : " + err);
        res[0] = {
          error: err,
        };
        result(err, res, null);
      } else {
        console.log("[+] Result : " + res);
        result(err, res, null);
      }
    }
  );
};

module.exports = { Traiter };
