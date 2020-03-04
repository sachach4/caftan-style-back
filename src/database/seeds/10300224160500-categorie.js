
const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();
module.exports = [
  {
    id: "693f4350-fa55-42a8-b7df-c765cc1669fd",
    nom: "Djellaba",
    created_at: now,
    updated_at: now
  },
  {
    id: "348b14bf-6ea0-432f-8c67-836ee8974e40",
    nom: "Caftan",
    created_at: now,
    updated_at: now
   
  },
  {
    id: "5ef90652-7aab-4ccc-866e-c099b3e74d34",
    nom: "Babouche",
    created_at: now,
    updated_at: now
   
  }
  
];

