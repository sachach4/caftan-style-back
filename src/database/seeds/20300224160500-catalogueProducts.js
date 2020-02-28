const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();
module.exports = [
  {
    id: uuid(),
    nom: "Lina",
    prix: 500,
    taille: "L",
    image: "/api/images/images4.jpeg",
    categorie_id: "463738b7-177f-4a1f-a9f6-9f29ff68fca6",
    stock: 10,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Alba",
    prix: 600,
    taille: "M",
    image: "/api/images/jelaba12.jpg",
    categorie_id: "3c7e29f2-092f-4eb8-b39a-e38ca4f4afc1",
    stock: 8,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Alba",
    prix: 600,
    taille: "M",
    image: "/api/images/babouche29.jpg",
    categorie_id: "53714695-98ba-46d3-9175-e232ad6827e4",
    stock: 8,
    created_at: now,
    updated_at: now
  }
];
