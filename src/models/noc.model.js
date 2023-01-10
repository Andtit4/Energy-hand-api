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

module.exports = { Noc };
