"use-strict";
const { Site } = require("../models/site.model");

exports.getAll = function () {
  Site.getAll(function (err, noc) {
    if (err) {
      res.send("[-] An error occured " + err);
      console.log("[-] An error occured " + err);
    } else {
      console.log("[+] Sites get " + err);

      res.send({ noc: noc });
    }
  });
};
