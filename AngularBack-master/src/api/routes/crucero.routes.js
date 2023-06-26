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
crucerosRouter.post("/",  upload.single("portada"), postCruceros);
crucerosRouter.delete("/:id", deleteCruceros);
crucerosRouter.put("/:id", upload.single("portada"), putCruceros);
crucerosRouter.get('/:id', getCruceroById);

module.exports = crucerosRouter;
