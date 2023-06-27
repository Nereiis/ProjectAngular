const express = require("express");
const {
  getByName
} = require("../controllers/search.controllers");

const searchRouter = express.Router();

searchRouter.get("/:input", getByName);


module.exports = searchRouter;