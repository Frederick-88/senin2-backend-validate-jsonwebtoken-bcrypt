const express = require("express");
const router = express.Router();
const asiaController = require("../Controller/AsiaController");

router.post("/register", asiaController.createData);
// router.post("/login", asiaController.authenticated);
router.get('/get', asiaController.getData)

// BISA DIBIKIN TANPA /GET DENGAN :
// router.get('', userController.getData)
// DENGAN SYARAT HARUS ADA METHOD GET

router.get('/get/:asiaId', asiaController.getDataById)
router.delete('/delete/:asiaId', asiaController.deleteById)

module.exports = router;