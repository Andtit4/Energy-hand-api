"use strict";

const { connect } = require("../config/db");

var User = function (user) {
  this.id_user = user.id_user;
  this.nom_user = user.nom_user;
  this.prenom_user = user.prenom_user;
  this.email_user = user.email_user;
  this.password_user = user.password_user;
  this.telephone_user = user.telephone_user;
};

User.auth = function (email, pass, result) {
  connect.query(
    "SELECT * FROM user WHERE email_user = ? AND password_user = ?",
    [email, pass],
    function (err, res) {
      if (err) {
        console.log("[-] An error occurred : " + err);
        result(err, null);
      } else {
        console.log("[+] Success : ", res[0]);
        if (res[0] == undefined) {
          console.log("first");
          res[0] = {
            error: "Email ou mot de passe incorrect",
          };
          console.log("[-] Not a user");
          result(err, res, null);
        } else {
          result(err, res, null);
        }
      }
    }
  );
};

User.create = function (nom, prenom, email, numero, result) {
  connect.query(
    "INSERT INTO user (nom_user, prenom_user, email_user, telephone_user) VALUES (?,?,?,?)",
    [nom, prenom, email, numero],
    function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(err, res, null);
      } else {
        console.log("[+] Result : " + res["insertId"]);
        result(err, res, null);
      }
    }
  );
};
User.update = function (pass, id, result) {
  connect.query(
    "UPDATE user SET password_user = ? WHERE id_user = ?",
    [pass, id],
    function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(err, res, null);
      } else {
        console.log("[+] Result : " + res["insertId"]);
        result(err, res, null);
      }
    }
  );
};

User.getById = function (id_user, result) {
  connect.query(
    "SELECT * FROM user WHERE id_user = ?",
    id_user,
    function (err, res) {
      if (err) {
        console.log("Error: ", err);
        result(err, res, null);
      } else {
        console.log("[+] Result : " + res);
        result(err, res, null);
      }
    }
  );
};

module.exports = { User };
