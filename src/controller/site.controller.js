"use-strict";
const { Site } = require("../models/site.model");

exports.getAll = function (req, res) {
  console.log("__controller_get_site_init");
  Site.getAll(function (err, site) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(site);
    }
  });
};

exports.nb = function (req, res) {
  Site.nb(function (err, site) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      res.send(site);
    }
  });
};
