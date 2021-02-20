const { Router } = require("express");
const create = require("../controllers/createPay.controllers");
const router = Router();

router.post("/createPay", create);

module.exports = router;
