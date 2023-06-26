const express = require("express");
const {
  getSpas,
  postSpas,
  putSpas,
  deleteSpas,
  getSpasById,
} = require("../controllers/spas.controllers");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const spaRouter = express.Router();

spaRouter.get("/", getSpas);
spaRouter.get("/:id", getSpasById);

spaRouter.post("/",  upload.single("Imagen"), postSpas);
spaRouter.delete("/:id",  deleteSpas);
spaRouter.put("/:id",  upload.single("Imagen"), putSpas);

module.exports = spaRouter;
