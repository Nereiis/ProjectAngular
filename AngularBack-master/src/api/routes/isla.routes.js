const express = require("express");
const {
  getIslas,
  postIslas,
  putIslas,
  deleteIslas,
} = require("../controllers/isla.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const islaRouter = express.Router();

islaRouter.get("/", getIslas);
islaRouter.post("/", isAuth, upload.single("imagen"), postIslas);
islaRouter.delete("/:id", isAuth, deleteIslas);
islaRouter.put("/:id", isAuth, upload.single("imagen"), putIslas);

module.exports = islaRouter;