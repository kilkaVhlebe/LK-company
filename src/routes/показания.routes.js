const  Router = require('express')
const router = new Router()
const ReadingsController = require('../controllers/показания.controller')

router.get('/get/readings/:id/:login/:password/:elementsOffset', ReadingsController.GetAllReadings)

module.exports = router