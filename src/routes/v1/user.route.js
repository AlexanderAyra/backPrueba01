const { Router } = require("express");
const userController = require('../../controller/user.controller')

const router = Router();

router
  .route('/')
  .get(userController.getUsers);


module.exports = router;