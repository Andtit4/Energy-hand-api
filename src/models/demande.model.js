"use strict";
const { connect } = require("../config/db");
var Demande = function (demande) {
  this.id_demande = demande.id_demande;
  this.type_demande = demande.type_demande;
  this.site = demande.site;
  this.equipement = demande.equipement;
  this.quantite = demande.quantite;
  this.notified = demande.notified;
  this.email_user = demande.email_user;
};

Demande.create = function (
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
  result
) {
  connect.query(
    "INSERT INTO demande (type_demande, site, equipement, quantite, notified, id_user, mounth, day, year, status, time) VALUES (?,?,?,?,?,?,?,?,?, ?, ?)",
    [
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
      time
    ],
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

Demande.all = function (result) {
  connect.query("SELECT * FROM demande", function (err, res) {
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

Demande.getById = function (id_user, result) {
  connect.query(
    "SELECT * FROM demande WHERE id_user = ?",
    id_user,
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

Demande.byEmail = function (email, result) {
  connect.query(
    "SELECT * FROM demande WHERE email_user = ?",
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

Demande.delete_by_id = function (id, result) {
  connect.query(
    "DELETE FROM demande WHERE id_demande = ?",
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

Demande.notified = function (email, result) {
  connect.query(
    "SELECT * FROM traiter WHERE notified = 1 AND email_user = ? and showed = false",
    email,
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

Demande.notified_end = function (showed, email, result) {
  connect.query(
    "UPDATE traiter SET showed = ? WHERE email_user = ? ",
    [showed, email],
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

Demande.notified_not = function (result) {
  connect.query(
    "SELECT * FROM demande WHERE notified = 0",
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

Demande.nb = function (result) {
  connect.query("SELECT COUNT(*) AS nb FROM demande", function (err, res) {
    if (err) {
      console.log("Error: ", err);
      result(err, res, null);
    } else {
      console.log("[+] Result : " + res);
      result(err, res, null);
    }
  });
};

Demande.updateStatus = function (status, id_demande, result) {
  connect.query(
    "UPDATE demande SET status = ? WHERE id_demande = ?",
    [status, id_demande],
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

Demande.getSiteHs = function (result) {
  connect.query(
    "SELECT * FROM demande, user WHERE type_demande =  'CURATIVE' WHERE id_user.user = id_user.demande ",
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

Demande.getNbHs = function (result) {
  connect.query(
    "SELECT COUNT(*) AS nb FROM demande WHERE type_demande =  'CURATIVE' ",
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

module.exports = { Demande };
