const router = require('express').Router()
const controller = require('../controller/AuthController')

router.get('/authentification', controller.authentification_view)
router.post('/authentification', controller.authentification)

router.get('/registration', controller.registration_view)
router.post('/registration', controller.registration)

module.exports = router
