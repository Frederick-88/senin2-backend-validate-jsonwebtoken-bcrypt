const express = require("express");
const router = express.Router();
const HeroesContainer = require("../Controller/HeroesContainer");

router.post("/post", HeroesContainer.createData);
router.get("/get", HeroesContainer.getData);
router.get("/get/:heroesId", HeroesContainer.getDatabyId);
router.delete("/delete/:heroesId", HeroesContainer.deleteById);
router.put("/edit/:heroesId", HeroesContainer.editById); //put artinya edit

// router.get('/get',HeroesContainer.getAllData)

module.exports = router;
