
const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();
module.exports = [
  {
    id: uuid(),
    nom: "Djellaba",
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Caftan",
    created_at: now,
    updated_at: now
   
  },
  {
    id: uuid(),
    nom: "Babouche",
    created_at: now,
    updated_at: now
   
  }
  
];

