const  Router = require('express')
const router = new Router()
const MeteringPointsController = require('../controllers/точки_учета.controller')

router.get('/get/all_points/:contract_id', MeteringPointsController.GetAllPoints)
router.get('/get/point/:contract_id/:point_id', MeteringPointsController.GetOnePoint)
router.get('/get/point_parameters/:point_id', MeteringPointsController.GetPointParameters)

module.exports = router