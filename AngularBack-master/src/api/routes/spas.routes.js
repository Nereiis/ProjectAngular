const express = require("express");
const {
  getSpas,
  postSpas,
  putSpas,
  deleteSpas,
} = require("../controllers/spas.controllers");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const spaRouter = express.Router();

spaRouter.get("/", getSpas);
spaRouter.post("/", isAuth, upload.single("Imagen"), postSpas);
spaRouter.delete("/:id", isAuth, deleteSpas);
spaRouter.put("/:id", isAuth, upload.single("Imagen"), putSpas);

module.exports = spaRouter;
