const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

let usersRouter = require("./users");
let recordingRouter = require("./recording");

express()
  .use(bodyParser.json())
  .use(express.static(path.join(__dirname, "public")))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "ejs")
  .get("/", (req, res) => res.render("pages/index"))
  .use("/recording", recordingRouter)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
