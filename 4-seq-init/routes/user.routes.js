const express = require("express");
const { createUser, getAllUser } = require("../controllers/users.controllers");
const router = express.Router();
router.post("/", createUser);
router.get("/", getAllUser);
