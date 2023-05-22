"use strict";

const { connect } = require("../config/db");

var Site = function (site) {
  (this.id_site = site.id_site),
    (this.nom_site = site.nom_site),
    (this.zone = site.zone),
    (this.latitude = site.latitude),
    (this.longitude = site.longitude);
};

Site.getAll = function (result) {
  connect.query("SELECT * FROM site", function (err, res) {
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

Site.nb = function (result) {
  connect.query("SELECT COUNT(*) AS nb FROM site", function (err, res) {
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

Site.getState = function (state, result) {
  connect.query(
    "SELECT * FROM site WHERE state = ?",
    state,
    function (err, res) {
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
    }
  );
};

module.exports = { Site };
