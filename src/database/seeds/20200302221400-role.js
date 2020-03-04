const uuid = require("uuid/v4");
const moment = require("moment");

const now = moment()
  .utc()
  .toDate();
module.exports = [
  {
    id: "a607083e-10ef-4c4f-99c3-1931dae14753",
    role: "Administrateur",
    created_at: now,
    updated_at: now
  },
  {
    id: "5907163d-314d-4255-9382-0f9095316b99",
    role: "Utilisateur",
    created_at: now,
    updated_at: now
  },
]