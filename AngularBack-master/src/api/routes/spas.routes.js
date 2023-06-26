const express = require("express");
const {
  getSpas,
  postSpas,
  putSpas,
  deleteSpas,
} = require("../controllers/spas.controllers");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const spasRouter = express.Router();

spasRouter.get("/", getSpas);
spasRouter.post("/", isAuth, upload.single("Imagen"), postSpas);
spasRouter.delete("/:id", isAuth, deleteSpas);
spasRouter.put("/:id", isAuth, upload.single("Imagen"), putSpas);

module.exports = spasRouter;
