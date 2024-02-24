const  Router = require('express')
const router = new Router()
const ReadingsController = require('../controllers/показания.controller')
const {authenticateToken} = require("../auth/jwtAuth");

router.get('/get/readings/:id/:elementsOffset', authenticateToken, (req, res) => ReadingsController.GetAllReadings(req, res))

module.exports = router