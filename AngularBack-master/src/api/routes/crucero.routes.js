const express = require("express");

const {
  getCruceros,
  postCruceros,
  putCruceros,
  deleteCruceros,
  getCruceroById,
} = require("../controllers/crucero.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const crucerosRouter = express.Router();

crucerosRouter.get("/", getCruceros);
crucerosRouter.post("/", isAuth, upload.single("portada"), postCruceros);
crucerosRouter.delete("/:id", isAuth, deleteCruceros);
crucerosRouter.put("/:id", isAuth, upload.single("portada"), putCruceros);
crucerosRouter.get('/:id', getCruceroById);

module.exports = crucerosRouter;
