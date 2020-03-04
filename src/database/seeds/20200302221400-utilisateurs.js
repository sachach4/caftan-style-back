const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();
module.exports = [
  {
    id: "ef5bec06-34d3-469e-8dad-9e5e90afb02c",
    nom: "abielala",
    prenom: "aicha",
    adresse: "29 RUE CARNOT",
    adresseliv: "IVRY SUR SEINE",
    email: "SACHACH4@gmail.com",
    sexe: "feminin",
    mps:"azerty",
    created_at: now,
    updated_at: now
  },
  {
    id: "b3243642-0c77-44f0-9b3a-e5758aad63da",
    nom: "naoufel",
    prenom: "samy",
    adresse: "1 RUE CARNOT",
    adresseliv: "IVRY SUR SEINE",
    email: "Samy@gmail.com",
    sexe: "masculin",
    mps:"1234",
    created_at: now,
    updated_at: now
  },
  {
    id: "33bcf014-5a86-4419-9529-7993cbb0b0af",
    nom: "naoufel",
    prenom: "islam",
    adresse: "12 RUE CARNOT",
    adresseliv: "IVRY SUR SEINE",
    email: "islam@gmail.com",
    sexe: "masculin",
    mps:"12345",
    created_at: now,
    updated_at: now
  },
  {
    id: "8b25c36f-4271-4556-88bb-1ee2e145d055",
    nom: "naoufel",
    prenom: "alae",
    adresse: "1 RUE CARNOT",
    adresseliv: "Paris",
    email:"alae@gmail.com",
    sexe: "feminin",
    mps:"1230",
    created_at: now,
    updated_at: now
  },

]