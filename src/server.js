const express = require("express");
const helmet = require("helmet");
const logger = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
//const { notFoundHandler, errorLogger, errorHandler,verifyToken } = require("./middlewares");
const verifyToken = require("./middlewares/verify_token");
const routes = require("./routes");
const server = express();

server.use(cors());
//server.use("/api", cors());
server.use(helmet());
server.use(logger("tiny"));
server.use(bodyParser.json());

//server.use("/api/auth", verifyToken);
server.use("/api/images", express.static("src/assets"));
server.use("/api", routes);


server.get("/api/ping", (req, res) => {
  res.json({ message: "pong" });
});

// Route privée
server.get("/api/auth",verifyToken, async (req, res) => {
  const { uid } = req.body;
  if (uid) {
    res.json({ message: "OK", uid });
  } else {
    res.json({ message: "NOPE" });
  }
});
// server.use(notFoundHandler);
// server.use(errorLogger);
// server.use(errorHandler);

module.exports = server;
