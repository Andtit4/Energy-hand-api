"use strict";

const { connect } = require("../config/db");

var Sup = function (sup) {
  this.id_sup = sup.id_sup;
  this.nom_sup = sup.nom_sup;
  this.prenom_sup = sup.prenom_sup;
  this.email_sup = sup.email_sup;
  this.password_sup = sup.password_sup;
  this.telephone_sup = sup.telephone_sup;
};

Sup.auth = function (email, pass, result) {
  connect.query(
    "SELECT * FROM superviseur WHERE email_sup = ? AND password_sup = ?",
    [email, pass],
    function (err, res) {
      if (err) {
        console.log("[-] An error occurred : " + err);
        result(err, null);
      } else {
        console.log("[+] Success : ", res[0]);
        if (res[0] == undefined) {
          console.log("first");
          res = {
            error: "notsup",
          };
          console.log("[-] Not a noc user");
          result(err, res, null);
        } else {
          result(err, res, null);
        }
      }
    }
  );
};

module.exports = { Sup };
