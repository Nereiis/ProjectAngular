const express = require("express");
const {getEscapadas, postEscapada, putEscapada, deleteEscapada} = require("../controllers/escapada.controller");
const { pruebaMiddleware, isAuth, isAdmin } = require("../../middlewares/auth");
const upload = require("../../middlewares/upload.file");
const escapadasRouter = express.Router();

escapadasRouter.get("/", getEscapadas);
escapadasRouter.post("/", isAuth, upload.single("portada"), postEscapada);
escapadasRouter.delete("/:id", isAuth, deleteEscapada);
escapadasRouter.put("/:id", isAuth, upload.single("portada"), putEscapada);

module.exports = escapadasRouter;