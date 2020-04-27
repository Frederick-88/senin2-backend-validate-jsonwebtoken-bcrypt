const express = require("express");
const router = express.Router();
const userController = require("../Controller/UserController");

router.post("/register", userController.createData);
router.post("/login", userController.authenticated);
router.get('/get', userController.getData)

// BISA DIBIKIN TANPA /GET DENGAN :
// router.get('', userController.getData)
// DENGAN SYARAT HARUS ADA METHOD GET

router.get('/get/:userId', userController.getDataById)
router.delete('/delete/:userId', userController.deleteById)

module.exports = router;

// var express = require('express');
// var router = express.Router();

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// module.exports = router;
