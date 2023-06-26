const express = require("express");
const {
  getIslas,
  postIslas,
  putIslas,
  deleteIslas,
  getIslaById,
} = require("../controllers/isla.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const islaRouter = express.Router();

islaRouter.get("/", getIslas);
islaRouter.get("/:id", getIslaById);
islaRouter.post("/",  upload.single("imagen"), postIslas);
islaRouter.delete("/:id",  deleteIslas);
islaRouter.put("/:id",  upload.single("imagen"), putIslas);

module.exports = islaRouter;