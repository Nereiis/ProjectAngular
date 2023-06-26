const express = require("express");
const {getEscapadas, postEscapada,getEscapadaById, putEscapada, deleteEscapada} = require("../controllers/escapada.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const escapadasRouter = express.Router();

escapadasRouter.get("/", getEscapadas);
escapadasRouter.get("/:id", getEscapadaById);
escapadasRouter.post("/",  upload.single("portada"), postEscapada);
escapadasRouter.delete("/:id",  deleteEscapada);
escapadasRouter.put("/:id",  upload.single("portada"), putEscapada);

module.exports = escapadasRouter;