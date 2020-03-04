const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();
module.exports = [
  {
    id: uuid(),
    nom: "Lia",
    prix: 500,
    taille: "L",
    image: "/api/images/jelaba1.jpeg",
    categorie_id: "693f4350-fa55-42a8-b7df-c765cc1669fd",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Nao",
    prix: 600,
    taille: "M",
    image: "/api/images/jelaba12.jpg",
    categorie_id: "693f4350-fa55-42a8-b7df-c765cc1669fd",
    descriptif:"Marié en veritable christal",
    stock: 8,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Roussa",
    prix: 600,
    taille: "M",
    image: "/api/images/jelaba2.jpeg",
    categorie_id: "693f4350-fa55-42a8-b7df-c765cc1669fd",
    descriptif:"Marié en veritable christal broquard",
    stock: 8,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Elise",
    prix: 600,
    taille: "M",
    image: "/api/images/jelaba9.jpeg",
    categorie_id: "693f4350-fa55-42a8-b7df-c765cc1669fd",
    descriptif:"Marié en veritable christal broquard",
    stock: 8,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Veris",
    prix: 600,
    taille: "M",
    image: "/api/images/jelaba8.jpeg",
    categorie_id: "693f4350-fa55-42a8-b7df-c765cc1669fd",
    descriptif:"Marié en veritable christal broquard",
    stock: 8,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Aby",
    prix: 600,
    taille: "M",
    image: "/api/images/jelaba5.jpeg",
    categorie_id: "693f4350-fa55-42a8-b7df-c765cc1669fd",
    descriptif:"Marié en veritable christal broquard",
    stock: 8,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Alba",
    prix: 500,
    taille: "L",
    image: "/api/images/caftan13.jpg",
    categorie_id: "348b14bf-6ea0-432f-8c67-836ee8974e40",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Caviar Noir",
    prix: 500,
    taille: "L",
    image: "/api/images/Caftan1.jpeg",
    categorie_id: "348b14bf-6ea0-432f-8c67-836ee8974e40",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },{
    id: uuid(),
    nom: "Sabrina",
    prix: 500,
    taille: "L",
    image: "/api/images/Caftan2.jpeg",
    categorie_id: "348b14bf-6ea0-432f-8c67-836ee8974e40",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },{
    id: uuid(),
    nom: "Mila",
    prix: 500,
    taille: "L",
    image: "/api/images/Caftan3.jpeg",
    categorie_id: "348b14bf-6ea0-432f-8c67-836ee8974e40",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },{
    id: uuid(),
    nom: "Oum",
    prix: 500,
    taille: "L",
    image: "/api/images/Caftan4.jpeg",
    categorie_id: "348b14bf-6ea0-432f-8c67-836ee8974e40",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },{
    id: uuid(),
    nom: "rosa",
    prix: 500,
    taille: "L",
    image: "/api/images/Caftan5.jpeg",
    categorie_id: "348b14bf-6ea0-432f-8c67-836ee8974e40",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },{
    id: uuid(),
    nom: "Basma",
    prix: 500,
    taille: "L",
    image: "/api/images/Caftan6.jpg",
    categorie_id: "348b14bf-6ea0-432f-8c67-836ee8974e40",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Amira",
    prix: 500,
    taille: "L",
    image: "/api/images/babouche18.jpg",
    categorie_id: "5ef90652-7aab-4ccc-866e-c099b3e74d34",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Alba",
    prix: 500,
    taille: "L",
    image: "/api/images/babouche26.jpg",
    categorie_id: "5ef90652-7aab-4ccc-866e-c099b3e74d34",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Mila",
    prix: 500,
    taille: "L",
    image: "/api/images/babouche19.jpg",
    categorie_id: "5ef90652-7aab-4ccc-866e-c099b3e74d34",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Zohor",
    prix: 500,
    taille: "L",
    image: "/api/images/babouche18.jpg",
    categorie_id: "5ef90652-7aab-4ccc-866e-c099b3e74d34",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Caviar Noir",
    prix: 500,
    taille: "L",
    image: "/api/images/babouche16.jpg",
    categorie_id: "5ef90652-7aab-4ccc-866e-c099b3e74d34",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Zora bordeau",
    prix: 500,
    taille: "L",
    image: "/api/images/babouche5.jpeg",
    categorie_id: "5ef90652-7aab-4ccc-866e-c099b3e74d34",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },
  {
    id: uuid(),
    nom: "Mina",
    prix: 500,
    taille: "L",
    image: "/api/images/babouche2.jpg",
    categorie_id: "5ef90652-7aab-4ccc-866e-c099b3e74d34",
    descriptif:"caftan satin brodé",
    stock: 10,
    created_at: now,
    updated_at: now
  },
];
