const { authJwt } = require("../middlewares");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  app.get("/api/test/all", (req, res) => {
    res.status(200).send("Public Content.");
  });
  app.get("/api/test/user", [authJwt.verifyToken], (req, res) => {
    res.status(200).send("User Content.");
  });
  app.get("/api/test/mod", [authJwt.verifyToken, authJwt.isModerator], (req, res) => {
      res.status(200).send("Moderator Content.");
  });
  app.get("/api/test/admin", [authJwt.verifyToken, authJwt.isAdmin], (req, res) => {
      res.status(200).send("Admin Content.");
  });
};
