const  Router = require('express')
const router = new Router()
const ReadingsController = require('../controllers/показания.controller')

router.get('/get/contract/:id/:login/:password', ReadingsController.GetAllReadings())
module.exports = router