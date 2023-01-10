"use strict";

const { connect } = require("../config/db");

var Noc = function (noc) {
  (this.id_noc = noc.id_noc),
    (this.email_noc = noc.email_noc),
    (this.password_noc = noc.password_noc),
    (this.nom_noc = noc.nom_noc),
    (this.prenom_noc = noc.prenom_noc),
    (this.telephone_noc = noc.telephone_noc);
};

Noc.auth = function (email, pass) {
  connect.query(
    "SELECT * FROM noc WHERE email_noc = ? AND password_noc = ?",
    [email, pass],
    function (err, res) {
      if (err) {
        console.log("[-] An error occurred : " + err);
        result(err, null);
      } else {
        console.log("[+] Success : ", res);
        result(err, res, null);
      }
    }
  );
};

module.exports = { Noc };
