const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 5000;

let usersRouter = require("./users");
let recordingRouter = require("./recording");

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (
    !req.secure &&
    req.get("x-forwarded-proto") !== "https" &&
    process.env.NODE_ENV !== "development"
  ) {
    return res.redirect("https://" + req.get("host") + req.url);
  }
  next();
}

express()
  .use(requireHTTPS)
  .use(express.json({ limit: "200mb" }))
  .use(
    express.urlencoded({
      limit: "200mb",
      extended: true,
      parameterLimit: 200000,
    })
  )
  .use(express.static(path.join(__dirname, "public")))
  .get("/", (req, res) => res.render("pages/index"))
  .use("/recording", recordingRouter)
  .listen(PORT, () => console.log(`Listening on ${PORT}`));
// .set("views", path.join(__dirname, "views"))
// .set("view engine", "ejs")
