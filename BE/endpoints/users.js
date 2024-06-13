const express = require("express");
const UserController = require("../controller/userController");
const UserService = require("../services/userService");

const userService = new UserService();
const userController = new UserController(userService);

const router = express.Router();

router.post("/user-signup", userController.createUser.bind(userController));

module.exports = router;
