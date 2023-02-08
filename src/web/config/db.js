"use strict";
require("dotenv").config();
const mysql = require("mysql");

var connect = mysql.createConnection({
  host: process.env.DB_HOST_WEB || "localhost",
  user: process.env.DB_USER_WEB || "root",
  database: process.env.DB_NAME_WEB || "gmao",
  password: process.env.DB_PASSWORD_WEB || "",
});

function verify() {
  connect.connect(function (err, conn) {
    if (err) return console.log("[-] AN error occurred :", JSON.stringify(err));
    else console.log("[+] Connected successfully ");
  });
}
module.exports = { verify: verify(), connect: connect };

