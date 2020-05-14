const router = require('express').Router()
const controller = require('../controller/JobsController')

router.post("/jobs", controller.create)
router.get("/jobs", controller.index)

module.exports = router