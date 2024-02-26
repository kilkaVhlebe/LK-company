const  Router = require('express')
const router = new Router()
const ReadingsController = require('../controllers/показания.controller')

router.get('/reading/get/readings/:userId/:contractId/:elementsOffset', ReadingsController.GetAllReadings)
router.put('/reading/reading_value', ReadingsController.readingValueInput)

module.exports = router