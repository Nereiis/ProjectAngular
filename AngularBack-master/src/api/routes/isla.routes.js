const express = require("express");
const {
  getIslas,
  postIslas,
  putIslas,
  deleteIslas,
} = require("../controllers/isla.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const islassRouter = express.Router();

islasRouter.get("/", getIslas);
islasRouter.post("/", isAuth, upload.single("portada"), postIslas);
islasRouter.delete("/:id", isAuth, deleteIslas);
islasRouter.put("/:id", isAuth, upload.single("portada"), putIslas);

module.exports = islasRouter;